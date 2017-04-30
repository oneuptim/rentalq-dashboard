import { Component, OnInit } from '@angular/core';
import { BackandService } from '@backand/angular2-sdk';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-archives',
  templateUrl: './archives.component.html',
  styleUrls: ['./archives.component.scss']
})

  export class ArchivesComponent {

      name:string = 'World';
      description:string = 'Wonderful';
      public items:any[] = [];
      public applications:any[] = [];
      searchQuery: string;
      email: string = ''
      user = {};
      loggedUser:string = '';
      extract = {};
      applicant = {};
      application = {};

      ngOnInit() {
        this.backand.user.getUserDetails(false)
          .then(res => {

           this.loggedUser = res.data.userId
           this.email = res.data.username

           this.backand.object.getOne("users", this.loggedUser, {
             "deep" : true })
             .then(res => {
               this.user = res.data
               this.email = res.data.email
               console.log(this.email)

              // THIS METHOD CHANGE D IN BACKAND SO MAKE SURE NOOOTTTT TO USE PARAMETERS :)
               this.backand.query.get("archived_applications", {
                  "email": this.email, // Using custom query to grab apps for this PM
                  "status": "Archived"
               })
               .then(data => {
                this.applications = data.data;
                console.log(data.data, "<<<<< ALL ARCHIVED APPLICATIONS")
               })
               .catch(error => { }) // END GRAB APPLICATION

           })
           .catch(err => {
             console.log(err);
           }); // End of user object fetch
           // Show user's applications in order of submission

          })
          .catch(err => {
           console.log(err);
          }); // End of user object fetch

      }

      constructor(private backand: BackandService, private router: Router) { } // CONSTRUCTOR

      // Update Emergency Object!
      public approveApplication(id) {
        console.log("Approve Application Method Entered");

          this.backand.object.getOne("applicationInformation", id, {
            "deep" : false })
            .then(res => {
              console.log(res.data, "<<<<<<<<<<<<<< Res Data coming from the fetched object!")

              // Declare options
              let options = {
                returnObject: true
              };

              // Set data values
              let status = "Approved"
              let data = {
               fullName: res.data.fullName,
               relationship: res.data.relationship,
               streetAddress: res.data.streetAddress,
               unitNumber: res.data.unitNumber,
               city: res.data.city,
               state: res.data.state,
               postCode: res.data.postCode,
               phoneNumber: res.data.phoneNumber,
               faxNumber: res.data.faxNumber,
               status: status,
               rentalCheck: res.data.rentalCheck,
               user: res.data.user
              };

              console.log(data, "All the fields of the specified application object");
              this.backand.object.update("applicationInformation", id, data, options)
              .then(data => {
               alert('Notification Successfully Sent to Tenant!');
              })
              .catch(error => {
               console.log(error, '<===== data from backend save handler error')
              })
          })
          .catch(err => {
            console.log(err);
          }); // End of user object fetch
        } // End Appliction Approved Method

      public applicationDetails(id) {
        this.backand.object.getOne("users", id, {
          "deep" : true })
          .then(res => {
            this.applicant = res.data
            console.log(res.data, "FROM USER PROFILE NESTTTTT?")
        })
        .catch(err => {
          console.log(err);
        }); // End of user object fetch
      }


      // Archive application method
      public unArchiveApplication(id) {
        this.backand.object.getOne("applicationInformation", id, {
          "deep" : true })
          .then(res => {
            this.application = res.data
            console.log(res.data.status, "APPLICATION TO BE ARCHIVED")


            let data = {
              status: "Processing"
            }

            let options = {
              returnObject: true
            }

            this.backand.object.update("applicationInformation", id, data, options)
            .then(res => {
              console.log(res, "<*** APP status updated")
              console.log('object updated');
              alert("Application Restored!")
              this.router.navigate(['/dashboard']);
            })
            .catch(err => {
              console.log(err);
            });
          })
          .catch(err => {
            console.log(err);
          }); // End of application to be archived object
      } // End of archive method!

      public filterItems() {
          // set q to the value of the searchbar
          var q = this.searchQuery;

          // if the value is an empty string don't filter the items
          if (!q || q.trim() == '') {
            return;
          }
          else{
              q = q.trim();
          }


          let params = {
              filter: [
                  this.backand.helpers.filter.create('name', this.backand.helpers.filter.operators.text.contains, q),
              ],
          }

          this.backand.object.getList('todo', params)
              .then((data: any) => {
                  console.log(data);
                  this.items = data.data;
              },
              (err: any) => {
                  console.log(err)
              }
          );
      }

  }

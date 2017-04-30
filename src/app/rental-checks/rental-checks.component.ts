import { Component, OnInit } from '@angular/core';
import { BackandService } from '@backand/angular2-sdk';
import { ActivatedRoute } from '@angular/router'
import { Router, RouterModule } from '@angular/router';


@Component({
  selector: 'app-rental-checks',
  templateUrl: './rental-checks.component.html',
  styleUrls: ['./rental-checks.component.scss']
})
export class RentalChecksComponent implements OnInit {

    public detailsId;
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
    coapplicants = [];
    dependents = [];
    pets = [];
    rentalhistory = [];
    documents = [];
    incomeemployment = [];
    incomeretired = [];
    incomeselfemployed = [];
    emergency = [];
    utilities = [];
    application = {};
    applicationNotes = [];
    notify_user:boolean;
    is_completed:boolean;
    appNote = {
      note: '',
      notify_user: 'false',
    };

    model = {
      firstDate: '',
      lastDate: ''
    }


    ngOnInit() {
      this.detailsId = this.route.snapshot.params['id'];
      console.log(this.detailsId, "<=== DETAILS ID")

      this.backand.object.getOne("applicationInformation", this.detailsId, {
        "deep": true })
        .then(res => {
          this.application = res.data
          this.applicationNotes = res.data.applicationnotes;
          console.log(res.data.applicationnotes, "<<<<< ALL INFO ON APPLICATION")
          console.log(res.data, "<=== USER ID???")

          // Fetch the details of the user upon page load!
          this.backand.object.getOne("users", res.data.user.id, {
            "deep" : true })
            .then(res => {
              this.applicant = res.data;
              this.coapplicants = res.data.coapplicants;
              this.dependents = res.data.dependents;
              this.pets = res.data.pets;
              this.rentalhistory = res.data.rentalhistory;
              this.documents = res.data.documents;
              this.incomeemployment = res.data.incomeemployment;
              this.incomeretired = res.data.incomeretired;
              this.incomeselfemployed = res.data.incomeselfemployed;
              this.emergency = res.data.emergency;
              this.utilities = res.data.utilities;
              console.log(res.data, "FROM USER PROFILE NESTTTTT?")
          })
          .catch(err => {
            console.log(err);
          }); // End of user object fetch


        })
    }

    constructor(private backand: BackandService, private route: ActivatedRoute, private router: Router) {

      backand.user.getUserDetails(false)
        .then(res => {
         this.loggedUser = res.data.userId
         this.email = res.data.username
         this.backand.object.getOne("users", this.loggedUser, {
           "deep" : true })
           .then(res => {
             this.user = res.data
             this.backand.query.get("pm_applications", {
                 "email": this.email // Using custom query to grab apps for this PM
             })
             .then(res => {
                 this.applications = res.data;
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

        //////////////////////////////////////////
        this.searchQuery = '';
        let that = this;
        this.backand.on("items_updated",
            (data: any) => {
                    console.log("items_updated", data);
                    let a = data as any[];
                    let newItem = {};
                    a.forEach((kv)=> newItem[kv.Key] = kv.Value);
                    that.items.unshift(newItem);
            }
        );

    } // CONSTRUCTOR


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


   public addNote(id) {
     console.log("Add note Method Entered")
     this.backand.object.create('applicationNotes', {
      'note': this.appNote.note,  'pm': this.loggedUser, 'application': id, 'is_completed': false, 'notify_user': this.appNote.notify_user
     })
     .then(res => {
       console.log(res.data)
      alert('Note Successfully Added');
       this.appNote.note = '';
      //  this.dismiss();
     })
     .catch(error => {
      console.log(error, '<===== data from backend save handler')
     })
   }

  // note (text)
  // pm (object/foreign_key)
  // application (collection/foreign_key)
  // is_completed (boolean = true/false)
  // notify_user (boolean = true/false)

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

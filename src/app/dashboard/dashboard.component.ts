import { Component, OnInit } from '@angular/core';
import { BackandService } from '@backand/angular2-sdk';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

    name:string = 'World';
    description:string = 'Wonderful';
    public items:any[] = [];
    public applications:any[] = [];
    auth_status:string = null;
    searchQuery: string;
    email: string = ''
    user = {};
    loggedUser:string = '';
    extract = {};
    applicant = {};
    application = {};
    ngShow:boolean = true;
    isValid:boolean = false;
    access_token:string = '';

    constructor(private backand: BackandService, private router: Router) {
        
      this.backand.on('applicationinformation_updated', () => { 
        this.fetchApplications();  
        console.log('Sockets triggered');
      });


      backand.user.getUserDetails(false)
        .then(res => {
         this.loggedUser = res.data.userId
         this.email = res.data.username
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

    ngOnInit() {
        this.fetchApplications();  
    }

    public fetchApplications () {
         this.backand.object.getOne("users", this.loggedUser, {
           "deep" : true })
           .then(res => {
             this.user = res.data
             this.backand.query.get("pm_applications", {
                 "email": this.email // Using custom query to grab apps for this PM
             })
             .then(res => {
               let sortedApplications = [];
               for(let i = 1; i <= res.data.length; i++) {
                  console.log(res.data[i].status)
                 if(res.data[i].status != 'Archived') {
                //  if(res.data[i].status !== 'Withdrawn' && res.data[i].status != 'Archived') {
                   console.log(sortedApplications.push(res.data[i]), "Each push");
                 }
                 this.applications = sortedApplications;
               }
                //  this.applications = res.data;
                 console.log(sortedApplications, "<<<<< ALL INFO ON APPLICATION")
             })
             .catch(error => { }) // END GRAB APPLICATION
         })
         .catch(err => {
           console.log(err);
         }); // End of user object fetch
         // Show user's applications in order of submission
    }

    public postItem() {
        let item = {
            name: this.name,
            description: this.description
        };

        this.backand.object.create('todo', item)
            .then((data: any) => {
                // add to beginning of array
                this.items.unshift({ id: null, name: this.name, description: this.description });
                console.log(this.items);
                this.name = '';
                this.description = '';
            },
            (err: any) => {
                console.log(err);
            }
        );
    } // End postItem Method

    onSelect(id) {
      console.log("ON SELECT CLICKED")
      this.router.navigate(['/details', id]);
      console.log(id, "<--- ID")
    }

    public applicationDetails(id) {
      this.backand.object.getOne("users", id, {
        "deep" : true })
        .then(res => {
          this.applicant = res.data
          this.router.navigate(['/details', id]);
          console.log(res.data, "FROM USER PROFILE NESTTTTT?")
      })
      .catch(err => {
        console.log(err);
      }); // End of user object fetch
    }


    // Archive application method
    public archiveApplication(id) {
      this.backand.object.getOne("applicationInformation", id, {
        "deep" : true })
        .then(res => {
          this.application = res.data
          console.log(res.data.status, "APPLICATION TO BE ARCHIVED")


          let data = {
            status: "Archived"
          }

          let options = {
            returnObject: true
          }

          this.backand.object.update("applicationInformation", id, data, options)
          .then(res => {
            console.log(res, "<*** APP status updated")
            console.log('object updated');
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


    public signOut() {
        this.backand.signout();
        this.auth_status = null;
        this.access_token = '';
        this.router.navigate(['/'])
    }

}

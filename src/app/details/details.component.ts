import { Component, OnInit } from '@angular/core';
import { BackandService } from '@backand/angular2-sdk';
import { ActivatedRoute } from '@angular/router'
import { Router, RouterModule } from '@angular/router';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
    auth_status:string = null;
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
    err = '';
    extractedCoApplicants = [];
    
    ownersMessage = {
      email: '',
      message: '',
    }

    socket = null;

    coapplicant = {};
    cocoapplicants = [];
    codependents = [];
    copets = [];
    corentalhistory = [];
    codocuments = [];
    coincomeemployment = [];
    coincomeretired = [];
    coincomeselfemployed = [];
    coemergency = [];

    ngOnInit() {

      this.detailsId = this.route.snapshot.params['id'];
      // console.log(this.detailsId, "<=== DETAILS ID")

      this.backand.object.action.get("applicationInformation", "RealtimeDB", {})
      .then(data => {
        console.log(data, "<<<=== test data %%%%%%%%%%%%%%%%%%%%%%")
        })
      .catch(error => { })

      this.backand.object.getOne("applicationInformation", this.detailsId, {
        "deep": true })
        .then(res => {
          this.application = res.data
          this.applicationNotes = res.data.applicationnotes;
          // console.log(res.data.applicationnotes, "<<<<< ALL INFO ON APPLICATION")
          // console.log(res.data, "<=== USER ID???")

          // Fetch the details of the user upon page load!
          // this.backand.object.getOne("users", this.detailsId, {
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
              // console.log(res.data, "FROM USER PROFILE NESTTTTT?")



              // Get all co-applicants array
              // Loop through array and run query
              // Push results into new array
              let sortedCoApplicants = []
              for(let i = 0; i <= this.coapplicants.length; i++) {
                let phoneNumber = this.coapplicants[i].phoneNumber
                // console.log(phoneNumber,"<<< PHONE");
                this.backand.query.post("fetch_co_applicants", {
                    "coapplicant_phone_number": phoneNumber
                })
                .then(res => {




                  console.log(res.data[0].id, "res data ID")
                  console.log(res.data, "RES DATA")
                  // console.log(res.data[0],"<<< res data");
                  sortedCoApplicants.unshift(res.data[0]);
                  // console.log(sortedCoApplicants, "sorted coapplicants after push")
                  this.extractedCoApplicants = sortedCoApplicants
                  console.log(this.extractedCoApplicants, "jhfghjklhgfdhghjklhg")
                })
                .catch(error => { })
              }


              // this.backand.query.get("fetch_co_applicants", {
              //     "coapplicant_phone_number": "0123456789"
              // })
              // .then(data => {
              //   console.log(data, "<<<=== Data from array");
              //
              //
              // })
              // .catch(error => { })



          })
          .catch(err => {
            // console.log(err);
            this.err = err;
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
          //  console.log(err);
         }); // End of user object fetch
         // Show user's applications in order of submission

        })
        .catch(err => {
        //  console.log(err);
        }); // End of user object fetch

        //////////////////////////////////////////
    } // CONSTRUCTOR

    // Update Emergency Object!
    public approveApplication(id) {
      // console.log("Approve Application Method Entered");

        this.backand.object.getOne("applicationInformation", id, {
          "deep" : false })
          .then(res => {
            // console.log(res.data, "<<<<<<<<<<<<<< Res Data coming from the fetched object!")

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

            // console.log(data, "All the fields of the specified application object");
            this.backand.object.update("applicationInformation", id, data, options)
            .then(data => {
             alert('Notification Successfully Sent to Tenant!');
             location.reload();
            })
            .catch(error => {
            //  console.log(error, '<===== data from backend save handler error')
            })
        })
        .catch(err => {
          // console.log(err);
        }); // End of user object fetch
      } // End Appliction Approved Method



      // Update Emergency Object!
      public denyApplication(id) {
        console.log("Deny Application Method Entered");

          this.backand.object.getOne("applicationInformation", id, {
            "deep" : false })
            .then(res => {
              // console.log(res.data, "<<<<<<<<<<<<<< Res Data coming from the fetched object!")

              // Declare options
              let options = {
                returnObject: true
              };

              // Set data values
              let status = "Denied"
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

              // console.log(data, "All the fields of the specified application object");
              this.backand.object.update("applicationInformation", id, data, options)
              .then(data => {
               alert('Notification Successfully Sent to Tenant!');
               location.reload();
              })
              .catch(error => {
              //  console.log(error, '<===== data from backend save handler error')
              })
          })
          .catch(err => {
            // console.log(err);
          }); // End of user object fetch
        } // End Appliction Denied Method



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
                alert('Application Successfully Archived!');
                location.reload();
              })
              .catch(err => {
                console.log(err);
              });
            })
            .catch(err => {
              console.log(err);
            }); // End of application to be archived object
        } // End of archive method!




   public addNote(id) {
    //  console.log("Add note Method Entered")
     this.backand.object.create('applicationNotes', {
      'note': this.appNote.note,  'pm': this.loggedUser, 'application': id, 'is_completed': false, 'notify_user': this.appNote.notify_user,
     })
     .then(res => {
       console.log(res.data, "<= Results of adding note to application")
      //  Update application status to On Hold
       if (this.appNote.notify_user == 'true') {
         this.backand.object.getOne("applicationInformation", id, {
           "deep" : true })
           .then(res => {
             this.application = res.data
             console.log(res.data.status, "APPLICATION ON HOLD")
             let data = {
               status: "On Hold"
             }

             let options = {
               returnObject: true
             }

             this.backand.object.update("applicationInformation", id, data, options)
             .then(res => {
               alert('Application Status Changed to On Hold!');
             })
             .catch(err => {
               console.log(err);
             });
           })
           .catch(err => {
             console.log(err);
           }); // End of application to be archived object
       }

      //  console.log(res.data)
      alert('Note Successfully Added');
       this.appNote.note = '';
       location.reload();
      //  this.dismiss();
     })
     .catch(error => {
      // console.log(error, '<===== data from backend save handler')
     })
   }

  // note (text)
  // pm (object/foreign_key)
  // application (collection/foreign_key)
  // is_completed (boolean = true/false)
  // notify_user (boolean = true/false)


public addOwnersMessage(id) {
    //  console.log("Add Owner's Note Method Entered")
     this.backand.object.create('ownersMessages', {
      'message': this.ownersMessage.message,  'agencyEmail': this.email, 'ownersEmail': this.ownersMessage.email, 'agencyID': this.loggedUser, 'applicationID': id, 
     })
     .then(res => {
       console.log(res.data, "<= Results of adding message to application")
      //  console.log(res.data)
      alert('Owner\'s Message Successfully Sent');
       this.ownersMessage.email = '';
       this.ownersMessage.message = '';
       location.reload();
      //  this.dismiss();
     })
     .catch(error => {
      // console.log(error, '<===== data from backend save handler')
     })
   }
       public signOut() {
        this.backand.signout();
        this.auth_status = null;
        this.router.navigate(['/'])
    }

        // Display co-applicant
        public displayCoApplicant(id) {
          this.backand.object.getOne("users", id, {
            "deep" : true })
            .then(res => {
              console.log(res.data, "Co-applicant data please?");
              this.coapplicant = res.data;
              this.cocoapplicants = res.data.coapplicants;
              this.codependents = res.data.dependents;
              this.copets = res.data.pets;
              this.corentalhistory = res.data.rentalhistory;
              this.codocuments = res.data.documents;
              this.coincomeemployment = res.data.incomeemployment;
              this.coincomeretired = res.data.incomeretired;
              this.coincomeselfemployed = res.data.incomeselfemployed;
              this.coemergency = res.data.emergency;

            })
            .catch(err => {
              console.log(err);
            }); // End of application to be archived object
        } // End of archive method!


}

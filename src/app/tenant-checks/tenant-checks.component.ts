import { Component, OnInit } from '@angular/core';
import { BackandService } from '@backand/angular2-sdk';
import { ActivatedRoute } from '@angular/router'
import { Router, RouterModule } from '@angular/router';


@Component({
  selector: 'app-tenant-checks',
  templateUrl: './tenant-checks.component.html',
  styleUrls: ['./tenant-checks.component.scss']
})
export class TenantChecksComponent implements OnInit {

    public detailsId;
    name:string = 'World';
    description:string = 'Wonderful';
    public items:any[] = [];
    public applications:any[] = [];
    searchQuery: string;
    email: string = ''
    user = {};
    loggedUser:string = '';
    tenantCheckObject = {};
    auth_status:string = null;

    tenantCheck = {
      propertyAddress: '',
      applicantID: '',
      applicantsEmail: '',
      agencyEmail: '',
      isComplete: '',
      moveInDate: '',
      moveOutDate: '',
      listedAsLesee: '',
      numberOfOccupants: '',
      breakLease: '',
      rentAmount: '',
      rentOnTime: '',
      anyArrears: '',
      anyPets: '',
      petDamage: '',
      petsApproved: '',
      noticeToRemedy: '',
      reasonToRemedy: '',
      routineInspection: '',
      lastInspectionCondition: '',
      lawnsMaintained: '',
      anyDamage: '',
      bondRefunded: '',
      reasonNoRefund: '',
      leaveCleanTidy: '',
      anyDisputes: '',
      disputeDetails: '',
      neighbourComplaints: '',
      wouldRentAgain: '',
      vacatingReason: '',
      terminateTenancy: '',
      additonalComments: '',
      informationIsTrue: ''
    };



    ngOnInit() {
      this.detailsId = this.route.snapshot.params['id'];
      console.log(this.detailsId, "<=== DETAILS ID")

          // Fetch the details of the user upon page load!
          this.backand.object.getOne("tenantCheck", 1, {
            "deep" : true })
            .then(res => {
              console.log(res.data, "Tenant Check Data")
              // this.tenantCheckObject = res.data;
              // this.tenantCheck.propertyAddress = res.data
              // this.tenantCheck.applicantID = res.data
              // this.tenantCheck.applicantsEmail = res.data
              // this.tenantCheck.agencyEmail = res.data
              // this.tenantCheck.isComplete = res.data
              // this.tenantCheck.moveInDate = res.data
              // this.tenantCheck.moveOutDate = res.data
              // this.tenantCheck.listedAsLesee = res.data
              // this.tenantCheck.numberOfOccupants = res.data
              // this.tenantCheck.breakLease = res.data
              // this.tenantCheck.rentAmount = res.data
              // this.tenantCheck.rentOnTime = res.data
              // this.tenantCheck.anyArrears = res.data
              // this.tenantCheck.anyPets = res.data
              // this.tenantCheck.petDamage = res.data
              // this.tenantCheck.petsApproved = res.data
              // this.tenantCheck.noticeToRemedy = res.data
              // this.tenantCheck.reasonToRemedy = res.data
              // this.tenantCheck.routineInspection = res.data
              // this.tenantCheck.lastInspectionCondition = res.data
              // this.tenantCheck.lawnsMaintained = res.data
              // this.tenantCheck.anyDamage = res.data
              // this.tenantCheck.bondRefunded = res.data
              // this.tenantCheck.reasonNoRefund = res.data
              // this.tenantCheck.leaveCleanTidy = res.data
              // this.tenantCheck.anyDisputes = res.data
              // this.tenantCheck.disputeDetails = res.data
              // this.tenantCheck.neighbourComplaints = res.data
              // this.tenantCheck.wouldRentAgain = res.data
              // this.tenantCheck.vacatingReason = res.data
              // this.tenantCheck.terminateTenancy = res.data
              // this.tenantCheck.additonalComments = res.data
              // this.tenantCheck.informationIsTrue = res.data
          })
          .catch(err => {
            console.log(err);
          }); // End of user object fetch


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

    } // CONSTRUCTOR


    // Update Emergency Object!
    public approveApplication(id) {
      console.log("Approve Application Method Entered");

        this.backand.object.getOne("applicationInformation", id, {
          "deep" : false })
          .then(res => {

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
             tenantCheck: res.data.tenantCheck,
             user: res.data.user
            };

            this.backand.object.update("applicationInformation", id, data, options)
            .then(data => {
             alert('Notification Successfully Sent to Tenant!');
            })
            .catch(error => {
            })
        })
        .catch(err => {
        }); // End of user object fetch
      } // End Appliction Approved Method

   public submitRentalCheck() {
     console.log("Tenant Check Add method Entered");
     let options = {
        returnObject: true
      };

      let data = {
        'propertyAddress': this.tenantCheck.propertyAddress,
        'applicantID': this.tenantCheck.applicantID,
        'applicantsEmail': this.tenantCheck.applicantsEmail,
        'agencyEmail': this.tenantCheck.agencyEmail,
        'isComplete': this.tenantCheck.isComplete,
        'moveInDate': this.tenantCheck.moveInDate,
        'moveOutDate': this.tenantCheck.moveOutDate,
        'listedAsLesee': this.tenantCheck.listedAsLesee,
        'numberOfOccupants': this.tenantCheck.numberOfOccupants,
        'breakLease': this.tenantCheck.breakLease,
        'rentAmount': this.tenantCheck.rentAmount,
        'rentOnTime': this.tenantCheck.rentOnTime,
        'anyArrears': this.tenantCheck.anyArrears,
        'anyPets': this.tenantCheck.anyPets,
        'petDamage': this.tenantCheck.petDamage,
        'petsApproved': this.tenantCheck.petsApproved,
        'noticeToRemedy': this.tenantCheck.noticeToRemedy,
        'reasonToRemedy': this.tenantCheck.reasonToRemedy,
        'routineInspection': this.tenantCheck.routineInspection,
        'lastInspectionCondition': this.tenantCheck.lastInspectionCondition,
        'lawnsMaintained': this.tenantCheck.lawnsMaintained,
        'anyDamage': this.tenantCheck.anyDamage,
        'bondRefunded': this.tenantCheck.bondRefunded,
        'reasonNoRefund': this.tenantCheck.reasonNoRefund,
        'leaveCleanTidy': this.tenantCheck.leaveCleanTidy,
        'anyDisputes': this.tenantCheck.anyDisputes,
        'disputeDetails': this.tenantCheck.disputeDetails,
        'neighbourComplaints': this.tenantCheck.neighbourComplaints,
        'wouldRentAgain': this.tenantCheck.wouldRentAgain,
        'vacatingReason': this.tenantCheck.vacatingReason,
        'terminateTenancy': this.tenantCheck.terminateTenancy,
        'additonalComments': this.tenantCheck.additonalComments,
        'informationIsTrue': this.tenantCheck.informationIsTrue
      }

      // CREATE NEW TENANT CHECK
     this.backand.object.create("tenantCheck", data, options)
     .then(res => {
      console.log(res, "<== New created object")
      this.tenantCheck.propertyAddress = this.tenantCheck.applicantID = this.tenantCheck.applicantsEmail = this.tenantCheck.agencyEmail = this.tenantCheck.isComplete = this.tenantCheck.moveInDate = this.tenantCheck.moveOutDate = this.tenantCheck.listedAsLesee = this.tenantCheck.numberOfOccupants = this.tenantCheck.breakLease = this.tenantCheck.rentAmount = this.tenantCheck.rentOnTime = this.tenantCheck.anyArrears = this.tenantCheck.anyPets = this.tenantCheck.petDamage = this.tenantCheck.petsApproved = this.tenantCheck.noticeToRemedy = this.tenantCheck.reasonToRemedy = this.tenantCheck.routineInspection = this.tenantCheck.lastInspectionCondition = this.tenantCheck.lawnsMaintained = this.tenantCheck.anyDamage = this.tenantCheck.bondRefunded = this.tenantCheck.reasonNoRefund = this.tenantCheck.leaveCleanTidy = this.tenantCheck.anyDisputes = this.tenantCheck.disputeDetails = this.tenantCheck.neighbourComplaints = this.tenantCheck.wouldRentAgain = this.tenantCheck.vacatingReason = this.tenantCheck.terminateTenancy = this.tenantCheck.additonalComments = this.tenantCheck.informationIsTrue = '';

      alert('Tenant Check Successfully Added');
      
     })
     .catch(error => {
     })
   }

    public signOut() {
        this.backand.signout();
        this.auth_status = null;
        this.router.navigate(['/'])
    }

    public saveRentalCheck() {
      let options = {
        return: true
      }
      let data = {
        'propertyAddress': this.tenantCheck.propertyAddress,
        'applicantID': this.tenantCheck.applicantID,
        'applicantsEmail': this.tenantCheck.applicantsEmail,
      }
      this.backand.object.create("tenantCheck", data, options)
      .then(res => {
        console.log(res, "Saved objec")
      })
      .catch(error => {
        console.log(error)
      })
    }

}

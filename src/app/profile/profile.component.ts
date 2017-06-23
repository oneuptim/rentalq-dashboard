import { Component, OnInit } from '@angular/core';
import { BackandService } from '@backand/angular2-sdk';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})

  export class ProfileComponent {
      auth_status:string = null;
      public items:any[] = [];
      public applications:any[] = [];
      searchQuery: string;
      email: string = ''
      user:any = {};
      agencyId: string = ''
      loggedUser:string = '';

      ngOnInit() {
        this.backand.user.getUserDetails(false)
          .then(res => {
            console.log(res, "ressssss");
           this.loggedUser = res.data.userId
           this.email = res.data.username
           this.backand.object.getOne("users", this.loggedUser, {
             "deep" : true })
             .then(res => {
               console.log(res, "user object")
               this.user = res.data
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

      constructor(private backand: BackandService, private router: Router) { 

      } // CONSTRUCTOR

      public signOut() {
        this.backand.signout();
        this.auth_status = null;
        this.router.navigate(['/'])
    }

  }

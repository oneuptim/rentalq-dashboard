import { Component, OnInit } from '@angular/core';
import 'rxjs/Rx';
import { BackandService } from '@backand/angular2-sdk';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  ngOnInit() {
  }

  email:string = '';
  firstName:string = '';
  lastName:string = '';
  signUpPassword: string = '';
  confirmPassword: string = '';

  constructor(private backand: BackandService, private router: Router) {


  }

  public signUp() {
    if (this.signUpPassword != this.confirmPassword){
      alert('Passwords should match');
      return;
    }
    this.backand.signup(this.firstName, this.lastName, this.email, this.signUpPassword, this.confirmPassword)
      .then((data: any) => {
          console.log(data, "<== Data from sign up")
          alert('Sign up succeeded');
          this.email = this.signUpPassword = this.confirmPassword = this.firstName = this.lastName = '';
          this.router.navigate(['/dashboard']);
      },
      (err: any) => {
          console.log(err)
      }
    );
  }

  login() {
    console.log("Log In clicked!")
    this.router.navigate(['/login']);
  }

  public socialSignin(provider: string) {
    this.backand.socialSignin(provider)
      .then((data: any) => {
            console.log('Sign up succeeded with:' + provider);
      },
      (err: any) => {
            console.log(err)
      }
    );
  }

  // public socialSignup(provider) {
  //   this.backand.socialSignup(provider)
  //     .then((data: any) => {
  //           console.log('Sign up succeeded with:' + provider);
  //     },
  //     (err: any) => {
  //           console.log(err)
  //     }
  //   );
  // }

  // public inAppSocial(provider) {
  //   var $obs = backand.service.inAppSocial(provider);
  //   $obs.subscribe(
  //       data => {
  //           console.log('Sign up succeeded with:' + provider);
  //       },
  //       err => {
  //           backand.service.logError(err)
  //       },
  //       () => console.log('Finish Auth'));
  // }
}

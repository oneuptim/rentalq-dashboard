import { Component, OnInit } from '@angular/core';
import 'rxjs/Rx';
import { BackandService } from '@backand/angular2-sdk';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

    username:string = 'jack@test.com';
    password:string = 'password';
    auth_type:string = "N/A";
    is_auth_error:boolean = false;
    auth_status:string = null;
    loggedInUser: string = '';
    email: string = ''

    ngOnInit() {

    }

    constructor(private backand: BackandService, private router: Router) {

        this.backand.user.getUserDetails().then(
            (data: any) => {
                console.log(data);
                if (data.data){
                    this.loggedInUser = data.data;
                    this.auth_status = 'OK';
                    this.auth_type = data.data.token_type == 'Anonymous' ? 'Anonymous' : 'Token';
                }
                else{
                   this.auth_status = null;
                }
            },
            (err: any) => {
                console.log(err);
                this.loggedInUser = null;
                this.auth_status = null;
                this.auth_type = null;
            }
        );
    }

    public signOut() {
        this.auth_status = null;
        this.backand.signout();
    }

}

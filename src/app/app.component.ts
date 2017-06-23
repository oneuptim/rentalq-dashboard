import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { BackandService, Response } from '@backand/angular2-sdk';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app works!';
	constructor(vRef: ViewContainerRef, private router: Router, private backand:BackandService) {

  }

  ngOnInit(): void {

    this.backand.init({
      appName: 'rentalq',
      signUpToken: '4ce62fa3-9d0f-4257-b235-1688890fb67b',
      anonymousToken: 'fce792db-2f1b-4d37-9d77-76d0ff0a49f2',
      runSocket: true,
      enableSignout: true
    });
  }
	public navigate(url: any) {
		this.router.navigate([url]);
	}

}


  // "styles": [
  //       "styles.css",
  //       "../node_modules/bootstrap/dist/css/bootstrap.css",
  //       "../node_modules/primeng/resources/themes/omega/theme.css",
  //       "../node_modules/primeng/resources/primeng.min.css",
  //       "../node_modules/font-awesome/css/font-awesome.css",
  //       "assets/styles/style.css"
  //     ],

  //     "scripts": [        
  //       "../node_modules/jquery/dist/jquery.js",
  //       "../node_modules/tether/dist/js/tether.js",
  //       "../node_modules/bootstrap/dist/js/bootstrap.js",
  //       "../node_modules/socket.io-client/dist/socket.io.js",
  //       "../node_modules/jquery/dist/jquery.min.js"
  //     ],
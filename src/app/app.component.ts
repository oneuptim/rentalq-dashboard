import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router';
import { BackandService, Response } from '@backand/angular2-sdk';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app works!';
	constructor(private router: Router, private backand:BackandService) {

  }

  ngOnInit(): void {
    this.backand.init({
      appName: 'rentalq',
      signUpToken: '4ce62fa3-9d0f-4257-b235-1688890fb67b',
      anonymousToken: 'fce792db-2f1b-4d37-9d77-76d0ff0a49f2',
      runSocket: true
    });
  }
	public navigate(url: any) {
		this.router.navigate([url]);
	}
}

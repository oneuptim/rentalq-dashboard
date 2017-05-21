import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ArchivesComponent } from './archives/archives.component';
import { DetailsComponent } from './details/details.component';
import { TenantChecksComponent } from './tenant-checks/tenant-checks.component';
import { FilesComponent } from './files/files.component';

const routes: Routes = [
	{ path: 'dashboard', component: DashboardComponent },
	{ path: 'archives', component: ArchivesComponent },
	{ path: 'details/:id', component: DetailsComponent },
	{ path: 'tenant-checks', component: TenantChecksComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'files', component: FilesComponent },
  { path: '**', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { IssueListComponent } from './issue-list/issue-list.component';
import { UserGardService } from './services/user-gard.service';
import { IssueAddComponent } from './issue-add/issue-add.component';
import { ProfileComponent } from './profile/profile.component';
import { SecurityTestComponent } from './security-test/security-test.component';
import { Auth0LoginComponent } from './auth0-login/auth0-login.component';
import { Auth0CallbackComponent } from './auth0-callback/auth0-callback.component';
import { Auth0HomeComponent } from './auth0-home/auth0-home.component';
import { MaterialTestComponent } from './material-test/material-test.component';
import { BootstrapTestComponent } from './bootstrap-test/bootstrap-test.component';
import { WsTestComponent } from './ws-test/ws-test.component';

const routes: Routes = [{
  path: 'login', component: LoginComponent
}, {
  path: 'material-test', component: MaterialTestComponent
}, {
  path: 'bootstrap-test', component: BootstrapTestComponent
}, {
  path: '', component: MainComponent, canActivate: [UserGardService],
  children: [{
    path: 'issue-list', component: IssueListComponent
  }, {
    path: 'sec-test', component: SecurityTestComponent
  }, {
    path: 'issue-add', component: IssueAddComponent
  }, {
    path: 'profile', component: ProfileComponent
  }, {
    path: 'ws-test', component: WsTestComponent
  }, {
    path: '**', redirectTo: 'issue-list'
  }]
}, {/*Auth0 authentication*/
  path: 'auth0-login', component: Auth0LoginComponent
}, {/*Auth0 authentication*/
  path: 'callback', component: Auth0CallbackComponent
}, {/*Auth0 authentication*/
  path: 'auth0-home', component: Auth0HomeComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Auth0Service } from './services/auth0.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'github-client-mat';
  notificationOptions = {
    position: ['top', 'right'],
    timeOut: 5000,
    lastOnBottom: false,
    showProgressBar: false,
    pauseOnHover: true,
    clickToClose: true,
    animate: 'scale'
  };
  constructor(private translate: TranslateService) {
    translate.addLangs(['it', 'en']);
    translate.setDefaultLang('en');
    translate.use(translate.getBrowserLang());
  }
}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// material
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSliderModule } from '@angular/material/slider';
// end material
// start bootstrap
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// end bootstrap
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HeaderInterceptorService } from './interceptors/header-interceptor.service';
import { MainComponent } from './main/main.component';
import { IssueListComponent } from './issue-list/issue-list.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatSortModule, MatNativeDateModule } from '@angular/material';
import { IssueAddComponent } from './issue-add/issue-add.component';
import { MenuComponent } from './menu/menu.component';
import { ProfileComponent } from './profile/profile.component';
import { AgmCoreModule } from '@agm/core';
import { TranslateModule, TranslateLoader, MissingTranslationHandler } from '@ngx-translate/core';
import { CustomTranslateLoader } from 'src/i18n/custom-translate-loader';
import { MyMissingTranslationHandler } from 'src/i18n/missing-translation-handler';
import { SecurityTestComponent } from './security-test/security-test.component';
import { SafeHtmlPipe } from './safe-html.pipe';
import { SafeStylePipe } from './safe-style.pipe';
import { Auth0LoginComponent } from './auth0-login/auth0-login.component';
import { Auth0CallbackComponent } from './auth0-callback/auth0-callback.component';
import { Auth0HomeComponent } from './auth0-home/auth0-home.component';
import { JwtModule } from '@auth0/angular-jwt';
import { MaterialTestComponent } from './material-test/material-test.component';
import { BootstrapTestComponent } from './bootstrap-test/bootstrap-test.component';
import { WsTestComponent } from './ws-test/ws-test.component';

export function tokenGetter() {
  return localStorage.getItem('id_token');
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    IssueListComponent,
    IssueAddComponent,
    MenuComponent,
    ProfileComponent,
    SecurityTestComponent,
    SafeHtmlPipe,
    SafeStylePipe,
    Auth0LoginComponent,
    Auth0CallbackComponent,
    Auth0HomeComponent,
    MaterialTestComponent,
    BootstrapTestComponent,
    WsTestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    SimpleNotificationsModule.forRoot(),
    FlexLayoutModule,
    AgmCoreModule.forRoot({ apiKey: 'AIzaSyCtW5HPyTO5PnwuC8vE_XWAs6qmscsN-ms' }),
    TranslateModule.forRoot({
      loader: { provide: TranslateLoader, useClass: CustomTranslateLoader },
      missingTranslationHandler: { provide: MissingTranslationHandler, useClass: MyMissingTranslationHandler },
      useDefaultLang: false
    }), /*
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ['example.com'],
        blacklistedRoutes: ['example.com/examplebadroute/']
      }
    }),*/
    // Material
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatTableModule,
    MatSortModule,
    MatSidenavModule,
    MatListModule,
    MatPaginatorModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatRadioModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSliderModule,
    NgbModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: HeaderInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }

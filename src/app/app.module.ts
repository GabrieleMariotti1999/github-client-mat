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
// end material
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
import { MatSortModule } from '@angular/material';
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
    SafeStylePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    SimpleNotificationsModule.forRoot(),
    FlexLayoutModule,
    AgmCoreModule.forRoot({ apiKey: 'AIzaSyC1rrnHnfb4PSfb6RpKfk7VG4BKqd3CtZA' }),
    TranslateModule.forRoot({
      loader: { provide: TranslateLoader, useClass: CustomTranslateLoader },
      missingTranslationHandler: { provide: MissingTranslationHandler, useClass: MyMissingTranslationHandler },
      useDefaultLang: false
    }),
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
    MatPaginatorModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: HeaderInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }

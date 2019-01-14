import { Component, OnInit } from '@angular/core';
import { User } from '../model/github.model';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  user: User;
  pages = [{ url: '/issue-list', name: 'menu.issues', icon: 'list' },
  { url: '/issue-add', name: 'menu.addIssue', icon: 'bug_report' },
  { url: '/profile', name: 'menu.profile', icon: 'account_circle' },
  { url: '/sec-test', name: 'menu.secTest', icon: 'lock' }];
  availableLanguages: string[] = [];
  constructor(private authService: AuthenticationService, private readonly router: Router, private translate: TranslateService) {
    this.availableLanguages = translate.langs;
  }

  ngOnInit() {
    this.authService.getUserInfo().subscribe(user => this.user = user);
  }
  current(url: string): boolean {
    return this.router.url.startsWith(url);
  }
  changeLanguageTo(lang: string) {
    this.translate.use(lang);
  }
  logout() {
    this.authService.logout();
  }
}

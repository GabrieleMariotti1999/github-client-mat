import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml, SafeStyle } from '@angular/platform-browser';

@Component({
  selector: 'app-security-test',
  templateUrl: './security-test.component.html',
  styleUrls: ['./security-test.component.css']
})
export class SecurityTestComponent implements OnInit {
  lock: string;
  background: string;
  search: string;
  constructor() {
    // tslint:disable-next-line:max-line-length
    this.lock = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/></svg>`;
    this.background = 'https://source.unsplash.com/featured/?';
  }
  bgStyle() {
    return `url('${this.background}${this.search}')`;
  }
  ngOnInit() {
  }

}

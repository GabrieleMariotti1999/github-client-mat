import { Component, OnInit } from '@angular/core';
import { IssueService } from '../services/issue.service';
import { NotificationsService } from 'angular2-notifications';
import { Router } from '@angular/router';

@Component({
  selector: 'app-issue-add',
  templateUrl: './issue-add.component.html',
  styleUrls: ['./issue-add.component.css']
})
export class IssueAddComponent implements OnInit {
  title: string;
  body: string;
  // tslint:disable-next-line:max-line-length
  constructor(private readonly issueService: IssueService, private readonly ntService: NotificationsService, private readonly router: Router) { }

  ngOnInit() {
  }
  submit() {
    this.issueService.add(this.title, this.body).subscribe(issue => {
      this.ntService.success('Issue inserita con successo', `Nuova issue creata: #${issue.number}`);
      this.router.navigate(['/issue-list']);
    });
  }
}

import { Component, OnInit, ViewChild } from '@angular/core';
import { IssueService } from '../services/issue.service';
import { Issue } from '../model/github.model';
import { MatSort, MatTableDataSource, MatPaginator, PageEvent } from '@angular/material';
import * as base64 from 'base-64';
@Component({
  selector: 'app-issue-list',
  templateUrl: './issue-list.component.html',
  styleUrls: ['./issue-list.component.css']
})
export class IssueListComponent implements OnInit {
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  dataSource: MatTableDataSource<Issue>;
  displayedColumns: string[] = ['number', 'title', 'state', 'user', 'date'];
  private stateIconsMap = new Map<string, string>();
  loading = false;
  constructor(private issueService: IssueService) {
    this.stateIconsMap.set('open', 'done');
    this.stateIconsMap.set('closed', 'close');
    console.log(base64.encode('RODORORADA'));
  }

  ngOnInit() {
    this.issueService.getAll().subscribe(resp => {
      this.dataSource = new MatTableDataSource(resp);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }
  getIconName(issue: Issue): string {
    if (this.stateIconsMap.has(issue.state)) {
      return this.stateIconsMap.get(issue.state);
    } else {
      return 'router';
    }
  }
  setState(issue: Issue): void {
    if (issue.state === 'open') {
      issue.state = 'closed';
    } else {
      issue.state = 'open';
    }
    this.loading = true;
    this.issueService.setState(issue, issue.state).subscribe(is => {
      issue = is;
      this.loading = false;
    });
  }
  doEvent(event: PageEvent) {
  }
}

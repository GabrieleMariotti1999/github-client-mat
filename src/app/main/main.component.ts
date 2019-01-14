import { Component, OnInit } from '@angular/core';
import { TokenService } from '../services/token.service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { AuthenticationService } from '../services/authentication.service';
import { User } from '../model/github.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  slug = `${environment.owner}/${environment.repo}`;
  user: User;
  constructor(private tokenService: TokenService, private router: Router, private authService: AuthenticationService) { }

  ngOnInit() {
  }
}

import { Component, OnInit } from '@angular/core';
import { ActiveDirectoryService } from '../_services/active-directory.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private activeService: ActiveDirectoryService) { }

  ngOnInit() {
  }

  login() {
    this.activeService.authenticateRedirect();
  }

}

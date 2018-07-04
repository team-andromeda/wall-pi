import { Component, OnInit } from '@angular/core';
import { ActiveDirectoryService } from '../_services/active-directory.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  data: any;

  constructor(private activeDirService: ActiveDirectoryService) { }

  ngOnInit() {
    this.activeDirService.getCalendar('assembly').subscribe((res) => {
      this.data = res;
    });
  }

  logout() {
    this.activeDirService.logout();
  }

}

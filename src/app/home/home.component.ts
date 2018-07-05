import { Component, OnInit } from '@angular/core';
import { ActiveDirectoryService } from '../_services/active-directory.service';
import * as Transform from '../../assets/js/transform.js';
import { ConfigService } from 'src/app/_services/config.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  data: any;
  statusMessage = '';
  timeout = null;

  constructor(
    private activeDirService: ActiveDirectoryService,
    private configService: ConfigService,
    private router: Router
  ) {

   this.timeout = window.setTimeout(() => {
      location.reload();
    }, 60 * 1000);
  }

  ngOnInit() {
    this.fetchData();
  }

  fetchData() {
    if (this.configService.getRoomId() === null) {
      console.error('No Room ID set, redirecting to config page');
      clearTimeout(this.timeout);
      this.router.navigate(['configPage']);
    }

    this.statusMessage = '(Fetching data...)';

    this.activeDirService.getCalendar(this.configService.getRoomId()).subscribe(
      (res) => {
        // this.data = res;
        // TODO(egeldenhuys): Send time and venue parameter
        console.log(res);
        this.statusMessage = '';
        Transform.run(
          res,
          this.configService.getRoomName(),
          this.activeDirService.formatDate(new Date())
        );
      },
      (err) => {
        this.statusMessage = '(Error fetching data)';
      }
    );
  }

  logout() {
    this.activeDirService.logout();
  }
}

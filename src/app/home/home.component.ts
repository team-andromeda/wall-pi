import { Component, OnInit } from '@angular/core';
import { ActiveDirectoryService } from '../_services/active-directory.service';
import * as Transform from '../../assets/js/transform.js';
import { ConfigService } from 'src/app/_services/config.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  data: any;

  constructor(
    private activeDirService: ActiveDirectoryService,
    private configService: ConfigService
  ) {}

  ngOnInit() {
    this.activeDirService
      .getCalendar(this.configService.getRoomId())
      .subscribe((res) => {
        // this.data = res;
        // TODO(egeldenhuys): Send time and venue paramater
        console.log(res);
        Transform.run(res, this.configService.getRoomName(), this.activeDirService.formatDate(new Date()));
      });
  }

  logout() {
    this.activeDirService.logout();
  }
}

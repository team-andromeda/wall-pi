import { Component, OnInit } from '@angular/core';
import { Config, Room, Location } from '../_models/config.model';
import { ConfigService } from '../_services/config.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css'],
})
export class ConfigComponent implements OnInit {
  selectedRoom: string = null;
  selectedLocation: string = null;

  locations: string[] = ['PTA', 'JHB', 'CPT'];

  config: Config = null;

  constructor(private configService: ConfigService, private router: Router) {}

  ngOnInit() {
    this.config = this.configService.getConfig();
    this.selectedLocation = this.configService.getLocation();
    this.selectedRoom = this.configService.getRoom();
  }

  save() {
    console.log('SENDING: ' + this.selectedRoom);
    this.configService.setRoom(this.selectedRoom);
    this.configService.setLocation(this.selectedLocation);
    this.router.navigate(['home']);
  }
}

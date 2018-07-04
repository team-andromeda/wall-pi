import { Component, OnInit } from '@angular/core';
import { Config, Room, Location } from '../_models/config.model';
import { ConfigService } from '../_services/config.service';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css'],
})
export class ConfigComponent implements OnInit {
  selectedRoom: Room = null;
  selectedLocation: Location = null;

  locations: string[] = ['PTA', 'JHB', 'CPT'];

  config: Config = null;

  constructor(private configService: ConfigService) {}

  ngOnInit() {
    this.config = this.configService.getConfig();
  }
}

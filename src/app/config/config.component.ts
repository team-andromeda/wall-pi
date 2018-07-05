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
  selectedRoomName: string = null;
  selectedRoomId: string = null;

  selectedLocation: string = null;

  locations: string[] = ['PTA', 'JHB', 'CPT'];

  config: Config = null;

  constructor(private configService: ConfigService, private router: Router) {}

  ngOnInit() {
    window.scrollTo(0, 0);
    this.load();
  }

  load() {
    this.config = this.configService.getConfig();
    this.selectedLocation = this.configService.getLocation();
    this.selectedRoomId = this.configService.getRoomId();
    this.selectedRoomName = this.configService.getRoomName();
  }

  save() {

    // Fetch the room name given the selectedRoomId
    this.config.rooms.forEach((room: Room) => {
      if (room.id === this.selectedRoomId) {
        this.selectedRoomName = room.name;
      }
    });

    this.configService.setRoomId(this.selectedRoomId);
    this.configService.setRoomName(this.selectedRoomName);
    this.configService.setLocation(this.selectedLocation);

    this.router.navigate(['home']);
  }
}

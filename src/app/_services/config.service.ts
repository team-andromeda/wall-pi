import { Injectable } from '@angular/core';
import { Config, Room, Location } from '../_models/config.model';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

const configPath = 'assets/config';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  private config: Config = null;

  // private selectedRoom: Room = null;
  // private selectedLocation: Location = null;

  constructor(private http: HttpClient, private router: Router) {
    const configStr = localStorage.getItem('config');

    if (configStr === null) {
      this.config = null;
    } else {
      this.config = JSON.parse(configStr);
    }

    this.fetchConfig();

    // this.selectedRoom = JSON.parse(localStorage.getItem('room'));
    // this.selectedLocation = JSON.parse(localStorage.getItem('location'));
  }

  /**
   * Sync function that may return null or a config
   * If null was returned expect the page to be "refreshed"
   */
  public getConfig(): Config {
    if (this.config === null) {
      console.warn('Config has not been fetched yet. Request will fail');
      console.log('Request pending...');
    }

    return this.config;
  }

  /**
   * Downloads the config file
   */
  public fetchConfig() {
    this.http.get(configPath, { responseType: 'json' }).subscribe(
      (data: Config) => {
        if (localStorage.getItem('config') === null) {
          // "Reload" the active path to enable the new config
          const url = this.router.url;

          this.router
            .navigate(['refresh'])
            .then((val1: boolean) => {
              this.router
                .navigate([url])
                .then((val2: boolean) => {
                  console.log('Fixed null config: ' + (val1 && val2));
                })
                .catch((err2: any) => {
                  console.error('Error navigating to ' + url);
                  console.error(err2);
                });
            })
            .catch((err1: any) => {
              console.error('Error while navigating to "/refresh"');
              console.error(err1);
            });
        }

        this.config = data;

        localStorage.setItem('config', JSON.stringify(data));
      },

      (error: any) => {
        const errorString: string = error.toString();
        const errorParts: string[] = errorString.split('\n');

        // This error appears to only occur when executing using `ng test`
        // TODO(egeldenhuys): Fix whatever is causing this error
        if (
          errorParts[0] === 'TypeError: _this.handler.handle is not a function'
        ) {
          console.warn(
            'ConfigurationService::fetchAPIHostname(): Suppressed "TypeError: _this.handler.handle is not a function"'
          );
        } else {
          console.error('Error loading ' + configPath);
          console.error(error);
        }
      }
    );
  }

  public setRoom(room: string) {
    console.log('Saving room ' + room);
    localStorage.setItem('room', room);
  }

  public setLocation(location: string) {
    localStorage.setItem('location', location);
  }

  public getRoom(): string {
    return localStorage.getItem('room');
  }

  public getLocation(): string {
    return localStorage.getItem('location');
  }
}

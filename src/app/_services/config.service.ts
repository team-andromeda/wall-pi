import { Injectable } from '@angular/core';
import { Config } from '../_models/config.model';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  private config: Config = null;

  constructor() { }


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
  // public fetchConfig() {
  //   this.http.get('/config', { responseType: 'json' }).subscribe(
  //     (data: Object) => {
  //       // "Reload" the active path to enable the new Docks address
  //       // This is required to reload any components that have
  //       // requested a null address
  //       if (this.tokenStorage.getToken(docksApiAddressKey) === null) {
  //         const url = this.router.url;

  //         this.router
  //           .navigate(['refresh'])
  //           .then((val1: boolean) => {
  //             this.router
  //               .navigate([url])
  //               .then((val2: boolean) => {
  //                 console.log(
  //                   'Fixed null Docks API address: ' + (val1 && val2)
  //                 );
  //               })
  //               .catch((err2: any) => {
  //                 console.error('Error navigating to ' + url);
  //                 console.error(err2);
  //               });
  //           })
  //           .catch((err1: any) => {
  //             console.error('Error while navigating to "/refresh"');
  //             console.error(err1);
  //           });
  //       }

  //       this.apiHostname = data['docksApiAddress'];
  //       this.tokenStorage.saveToken(docksApiAddressKey, this.apiHostname);
  //     },

  //     (error: any) => {
  //       const errorString: string = error.toString();
  //       const errorParts: string[] = errorString.split('\n');

  //       // This error appears to only occur when executing using `ng test`
  //       // TODO(egeldenhuys): Fix whatever is causing this error
  //       if (
  //         errorParts[0] === 'TypeError: _this.handler.handle is not a function'
  //       ) {
  //         console.warn(
  //           'ConfigurationService::fetchAPIHostname(): Suppressed "TypeError: _this.handler.handle is not a function"'
  //         );
  //       } else {
  //         console.error('Error while loading Docks API addess from /config');
  //         console.error(error);
  //       }
  //     }
  //   );
  // }
}

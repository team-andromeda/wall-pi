import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, RouterModule, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-callback',
  templateUrl: './callback.component.html',
  styleUrls: ['./callback.component.css'],
})
export class CallbackComponent implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const rawJwt = this.getParam('access_token');

      console.log(rawJwt);
      console.log('Saving JWT');
      localStorage.setItem('jwt', rawJwt);
      this.router.navigate(['/']);
    });
  }

  // Source: https://stackoverflow.com/questions/47455734/how-get-query-parameters-from-url-in-angular-5?rq=1
  getParam(name) {
    const results = new RegExp('[\\?&]' + name + '=([^&#]*)').exec(
      window.location.href.replace('#', '?')
    );
    if (!results) {
      return null;
    }
    return results[1] || null;
  }

  // Source: https://stackoverflow.com/questions/47455734/how-get-query-parameters-from-url-in-angular-5?rq=1
  printParams() {
    console.log('param1 = ' + this.getParam('param1'));
    console.log('param2 = ' + this.getParam('param2'));
  }
}

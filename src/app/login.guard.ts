import {Injectable} from '@angular/core';
import {ActivatedRoute, ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {of} from 'rxjs';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(private route: ActivatedRoute,
              private router: Router,
              private httpClient: HttpClient) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): any {
    let token = route.queryParams.ssoAccessToken;
    if (!token) {
      this.router.navigate(['unauthorized']);
      return false;
    }
    this.httpClient
      .post('http://localhost:9090/v1/token', {}, this.getHeaders(token))
      .pipe(catchError(err => {
          console.log(err.status);
          this.router.navigate(['unauthorized']);
          return of(false);
      }))
      .subscribe(
        () => {
          return true;
        });
  }

  private getHeaders(token: string) {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    return {headers};
  }

}

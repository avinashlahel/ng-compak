import {Injectable} from '@angular/core';
import {ActivatedRoute, ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {of} from 'rxjs';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, map} from "rxjs/operators";
import {AuthService} from "./services/auth.service";

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(private route: ActivatedRoute,
              private router: Router,
              private httpClient: HttpClient,
              private authService: AuthService) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): any {
    let token = route.queryParams.ssoAccessToken;
    this.authService._token = token; // set token
    if (!token) {
      this.router.navigate(['unauthorized']);
      return false;
    }
    return this.httpClient
      .post('http://localhost:9090/v1/token', {}, this.getHeaders(token))
      .pipe(
        map(() => true),
        catchError(err => {
          console.log(err.status);
          this.router.navigate(['unauthorized']);
          return of(false);
        }));
  }

  private getHeaders(token: string) {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    return {headers};
  }

}

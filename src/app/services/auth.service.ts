import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public _token: any = undefined;
  public _isAuthenticated: boolean = false;

  constructor() { }
}

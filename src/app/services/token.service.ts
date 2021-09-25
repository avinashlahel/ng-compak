import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  public getToken(key: string) {
    return localStorage.getItem(key);
  }
}

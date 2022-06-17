import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IToken } from 'src/app/models';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // TODO: Define model for user
  private user!: any;

  constructor(private httpClient: HttpClient) { }

  login(username: string, password: string): Observable<IToken> {
    return this.httpClient.post<IToken>(
      "http://localhost:6969/api-auth/",
      {username, password});
  }

  getUser() {
    return this.user;
  }

  setUser(user: any) {
    this.user = user;
  }

}

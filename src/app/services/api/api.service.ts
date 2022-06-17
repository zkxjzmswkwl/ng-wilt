import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs/internal/Observable';
import { IScrobble, IToken } from 'src/app/models';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl: string = "http://localhost:6969/pusherman";

  constructor(
    private httpClient: HttpClient,
    private cookies: CookieService
    ) { }

  testApiCall() {
    return this.httpClient.get(`${this.apiUrl}/scrobbles/`);
  }

  getSelf() {
    let headers = new HttpHeaders().append("Authorization", `Token ${this.cookies.get("Authorization")}`);
    return this.httpClient.get<IToken>(`${this.apiUrl}/members/me/`, {headers});
  }

  getXRecentScrobbles(x: number): Observable<IScrobble[]> { 
    return this.httpClient.get<IScrobble[]>(`${this.apiUrl}/scrobbles/recent?count=${x}`);
  }

  getScrobblesByUser(username: number): Observable<IScrobble[]> {
    return this.httpClient.get<IScrobble[]>(`${this.apiUrl}/scrobbles/by_user?username=${username}`);
  }
}

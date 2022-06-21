import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs/internal/Observable';
import { IArtist, ICount, IScrobble, ISong, IToken, IUpdate } from 'src/app/models';

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
    return this.httpClient.get<IScrobble[]>(`${this.apiUrl}/scrobbles/recent/?count=${x}`);
  }

  getScrobblesByUser(username: number): Observable<IScrobble[]> {
    return this.httpClient.get<IScrobble[]>(`${this.apiUrl}/scrobbles/by_user/?username=${username}`);
  }

  getArtistByName(name: string | null): Observable<IArtist> {
    return this.httpClient.get<IArtist>(`${this.apiUrl}/artists/get_by/?name=${name}`);
  }

  getArtistScrobbleCount(id: number): Observable<ICount> {
    return this.httpClient.get<ICount>(`${this.apiUrl}/artists/${id}/count/`);
  }

  getArtistsRecentScrobbles(id: number): Observable<IScrobble[]> {
    return this.httpClient.get<IScrobble[]>(`${this.apiUrl}/artists/${id}/recent_listens/?count=6`);
  }

  getArtistsTopSongs(id: number): Observable<ISong[]> {
    return this.httpClient.get<ISong[]>(`${this.apiUrl}/artists/${id}/get_top_songs/?count=5`);
  }

  getUpdate(id: number): Observable<IUpdate> {
    return this.httpClient.get<IUpdate>(`${this.apiUrl}/updates/${id}/`);
  }
}

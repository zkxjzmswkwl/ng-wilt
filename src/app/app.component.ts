import { Component } from '@angular/core';
import { ApiService, AuthService } from './services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'wilt';
  currentUser!: any;

  constructor(
    private apiService: ApiService,
    private authService: AuthService
    ) {
    this.apiService.getSelf()?.subscribe(
      (val: any) => {
        this.authService.setUser(val);
        // Silly? Am I silly guy men??
        this.currentUser = val;
        console.log(val);
      },
      (err: any) => {
        console.log(err);
      });

  }
}

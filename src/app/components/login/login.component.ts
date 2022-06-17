import { Component, Input, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { IToken } from 'src/app/models';
import { AuthService } from 'src/app/services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @Input() username!: string;
  @Input() password!: string;

  constructor(
    private authService: AuthService,
    private cookies: CookieService
    ) { }

  doLogin() {
    this.authService.login(this.username, this.password).subscribe(
      (val: IToken) => {
        window.location.href = "/";
        console.log(val);
        this.cookies.set("Authorization", val.token);
      },
      (err: any) => {
        console.log(err);
      });
  }

  ngOnInit(): void {
  }

}

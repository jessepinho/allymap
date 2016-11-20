import { AngularFire } from 'angularfire2';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authenticate',
  templateUrl: './authenticate.component.html',
  styleUrls: ['./authenticate.component.css'],
})
export class AuthenticateComponent implements OnInit {
  private displayName: string;
  private email: string;
  private isAuthenticated: boolean = false;
  private isAuthenticating: boolean = false;
  private photoURL: string;

  constructor(
    private af: AngularFire
  ) {}

  private authenticate() {
    this.isAuthenticating = true;

    this.af.auth
      .subscribe(
        (authState) => {
          if (authState) {
            const { auth: { displayName, email, photoURL } } = authState;
            this.displayName = displayName;
            this.email = email;
            this.photoURL = photoURL;
            this.isAuthenticated = true;
          } else {
            this.isAuthenticated = false;
          }
          this.isAuthenticating = false;
        },
        () => {
          this.isAuthenticating = false;
          this.isAuthenticated = false;
        }
      );
  }

  ngOnInit() {
    this.authenticate();
  }

  // tslint:disable-next-line:no-unused-variable
  private logIn() {
    this.af.auth
      .login()
      .then((result) => {
        const accessToken = result['facebook']['accessToken'];
        FB.api('/me/friends', 'get', { access_token: accessToken }, (response) => {
          FB.api(`/${response.data[0].id}`,
                 'get',
                 {
                   fields: ['first_name', 'last_name', 'picture'],
                   access_token: accessToken,
                 },
                 console.log);
        });
      })
      .catch(console.error);
  }

  // tslint:disable-next-line:no-unused-variable
  private logOut() {
    this.af.auth.logout();
  }
}

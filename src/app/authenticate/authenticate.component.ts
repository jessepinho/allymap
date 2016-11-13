import { Component } from '@angular/core';
import { AngularFire } from 'angularfire2';

@Component({
  selector: 'app-authenticate',
  templateUrl: './authenticate.component.html',
  styleUrls: ['./authenticate.component.css']
})
export class AuthenticateComponent {
  constructor(
    private af: AngularFire
  ) {}

  // tslint:disable-next-line:no-unused-variable
  private logIn() {
    this.af.auth.login();
  }

  // tslint:disable-next-line:no-unused-variable
  private logOut() {
    this.af.auth.logout();
  }
}

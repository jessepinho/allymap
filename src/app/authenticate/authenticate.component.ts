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

  private logIn() {
    this.af.auth.login();
  }

  private logOut() {
    this.af.auth.logout();
  }
}

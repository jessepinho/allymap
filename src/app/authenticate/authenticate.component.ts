import { AngularFire } from 'angularfire2';
import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from 'ng2-redux';
import { Observable } from 'rxjs/Observable';

import { USER_SET } from '../action-types';

@Component({
  selector: 'app-authenticate',
  templateUrl: './authenticate.component.html',
  styleUrls: ['./authenticate.component.css'],
})
export class AuthenticateComponent implements OnInit {
  // tslint:disable:no-unused-variable
  @select(['user', 'displayName']) private displayName: Observable<string>;
  @select(['user', 'email']) private email: Observable<string>;
  @select(['user', 'isAuthenticated']) private isAuthenticated: Observable<boolean>;
  @select(['user', 'isAuthenticating']) private isAuthenticating: Observable<boolean>;
  @select(['user', 'photoURL']) private photoURL: Observable<string>;
  // tslint:enable:no-unused-variable

  constructor(
    private af: AngularFire,
    private ngRedux: NgRedux<IAppState>
  ) {}

  private authenticate() {
    this.setUser({
      isAuthenticated: false,
      isAuthenticating: true,
    });

    this.af.auth
      .subscribe(
        (authState) => {
          if (authState) {
            const { auth: { displayName, email, photoURL } } = authState;
            this.setUser({
              isAuthenticated: true,
              isAuthenticating: false,
              displayName,
              email,
              photoURL,
            });
          } else {
            this.setUser({
              isAuthenticated: false,
              isAuthenticating: false,
            });
          }
        },
        () => {
          this.setUser({
            isAuthenticated: false,
            isAuthenticating: false,
          });
        }
      );
  }

  ngOnInit() {
    this.authenticate();
  }

  private logIn() { // tslint:disable-line:no-unused-variable
    this.af.auth
      .login()
      .catch(console.error);
  }

  private logOut() { // tslint:disable-line:no-unused-variable
    this.af.auth.logout();
  }

  private setUser(value: IUserState): void {
    this.ngRedux.dispatch({
      type: USER_SET,
      value,
    });
  }
}

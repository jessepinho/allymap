import { AngularFire } from 'angularfire2';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import { USER_SET } from '../action-types';

@Component({
  selector: 'app-authenticate',
  templateUrl: './authenticate.component.html',
  styleUrls: ['./authenticate.component.css'],
})
export class AuthenticateComponent implements OnInit {
  private displayName: Observable<string>;
  private email: Observable<string>;
  private isAuthenticated: Observable<boolean>;
  private isAuthenticating: Observable<boolean>;
  private photoURL: Observable<string>;

  constructor(
    private af: AngularFire,
    private store: Store<IAppState>
  ) {
    this.displayName = store.select('user.displayName');
    this.email = store.select('user.email');
    this.isAuthenticated = store.select('user.isAuthenticated');
    this.isAuthenticating = store.select('user.isAuthenticating');
    this.photoURL = store.select('user.photoURL');
  }

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

  private setUser(payload: IUserState): void {
    this.store.dispatch({
      type: USER_SET,
      payload,
    });
  }
}

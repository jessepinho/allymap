import { AgmCoreModule } from 'angular2-google-maps/core';
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';
import { BrowserModule } from '@angular/platform-browser';
import * as createLogger from 'redux-logger';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { AuthenticateComponent } from './authenticate/authenticate.component';
import { MapComponent } from './map/map.component';
import { store } from './reducers/store';

export const firebaseConfig = {
  apiKey: 'AIzaSyCo4cwQvRqsIKzyEqkkXRSPpIu8KM-XCKk',
  authDomain: 'ally-map.firebaseapp.com',
  databaseURL: 'https://ally-map.firebaseio.com',
  storageBucket: 'ally-map.appspot.com',
  messagingSenderId: '37098180673',
};

const firebaseAuthConfig = {
  provider: AuthProviders.Facebook,
  method: AuthMethods.Popup,
  scope: ['user_friends'],
};

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    AuthenticateComponent,
  ],
  imports: [
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCaHXS-FjKUymJzEjpl468Fkjd5EX3RYi4',
    }),
    AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig),
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    store,
    StoreDevtoolsModule.instrumentOnlyWithExtension(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  // TODO: Change `any` to IAppState once I can generate a valid initial state
  // as the second argument.
  // constructor(ngRedux: NgRedux<any>) {
  //   ngRedux.configureStore(rootReducer, {}, [createLogger()]);
  // }
}

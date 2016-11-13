import { AgmCoreModule } from 'angular2-google-maps/core';
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { AuthenticateComponent } from './authenticate/authenticate.component';

export const firebaseConfig = {
  apiKey: 'AIzaSyCo4cwQvRqsIKzyEqkkXRSPpIu8KM-XCKk',
  authDomain: 'ally-map.firebaseapp.com',
  databaseURL: 'https://ally-map.firebaseio.com',
  storageBucket: 'ally-map.appspot.com',
  messagingSenderId: '37098180673'
};

const firebaseAuthConfig = {
  provider: AuthProviders.Facebook,
  method: AuthMethods.Redirect,
};

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    AuthenticateComponent
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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

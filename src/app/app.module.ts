import { AgmCoreModule } from 'angular2-google-maps/core';
import { AngularFireModule } from 'angularfire2';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';

export const firebaseConfig = {
  apiKey: "AIzaSyCo4cwQvRqsIKzyEqkkXRSPpIu8KM-XCKk",
  authDomain: "ally-map.firebaseapp.com",
  databaseURL: "https://ally-map.firebaseio.com",
  storageBucket: "ally-map.appspot.com",
  messagingSenderId: "37098180673"
};

@NgModule({
  declarations: [
    AppComponent,
    MapComponent
  ],
  imports: [
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCaHXS-FjKUymJzEjpl468Fkjd5EX3RYi4',
    }),
    AngularFireModule.initializeApp(firebaseConfig),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

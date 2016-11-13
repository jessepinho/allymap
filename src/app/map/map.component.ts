import { Component } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent {
  // tslint:disable:no-unused-variable
  private latitude: number = 51.678418;
  private longitude: number = 7.809007;
  private checkIns: ICheckIn[] = [
    { latitude: 51.678418, longitude: 7.809007 },
    { latitude: 52.678418, longitude: 7.209007 },
  ];
  // tslint:enable:no-unused-variable
}

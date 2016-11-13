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
  private markers: IMarker[] = [
    { latitude: 51.678418, longitude: 7.809007, isOpen: false },
    { latitude: 52.678418, longitude: 7.209007, isOpen: false },
  ];

  // TODO: Investigate why this isn't being called.
  private handleInfoWindowClose(marker: IMarker) {
    marker.isOpen = false;
  }

  private handleMapClick() {
    this.closeAllInfoWindows();
  }

  private handleMarkerClick(marker: IMarker) {
    this.closeAllInfoWindows();
    marker.isOpen = true;
  }
  // tslint:enable:no-unused-variable

  private closeAllInfoWindows() {
    this.markers.forEach(marker => marker.isOpen = false);
  }
}

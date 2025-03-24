
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hello from BridgeLabz';
  logoUrl = 'assets/images/BridgeLabz.jpg';  // Property holding the image URL
  bridgeLabzUrl = 'https://www.bridgelabz.com';  // BridgeLabz website URL

  // Method to open BridgeLabz URL in a new tab
  openBridgeLabzSite() {
    window.open(this.bridgeLabzUrl, '_blank');  // Opens the URL in a new tab
  }
}


import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone:true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName='';
  title='Hello from BridgeLabz';
  logoUrl = 'assets/images/BridgeLabz.jpg';  // Property holding the image URL
  bridgeLabzUrl = 'https://www.bridgelabz.com';  // BridgeLabz website URL
  onInputChange(event: Event) {
    this.userName = (event.target as HTMLInputElement).value;
  }
}

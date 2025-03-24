import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule for structural directives

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [CommonModule] // Add CommonModule here for ngIf and ngFor
})
export class AppComponent {
  userName: string = '';
  title: string = 'Hello from BridgeLabz';
  logoUrl: string = 'assets/images/BridgeLabz.jpg'; // Property holding the image URL
  bridgeLabzUrl: string = 'https://www.bridgelabz.com'; // BridgeLabz website URL
  errorMessage: string = ''; // Property to store error messages

  // Validation: Ensure the name starts with a capital letter and is at least 3 characters long
  validateName(name: string): boolean {
    const namePattern = /^[A-Z][a-zA-Z]{2,}$/; // Regex pattern for Initial Cap and min 3 letters
    return namePattern.test(name);
  }

  onInputChange(event: Event): void {
    const input = (event.target as HTMLInputElement)?.value;
    if (this.validateName(input)) {
      this.userName = input;
      this.errorMessage = ''; // Clear error message if valid
    } else {
      this.userName = ''; // Clear the userName if invalid
      this.errorMessage = 'Please enter a valid name (Initial Caps and at least 3 letters)'; // Set error message
    }
  }
}
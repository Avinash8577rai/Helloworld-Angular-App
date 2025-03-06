import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  imports: [FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone :true,
  


})
export class AppComponent {
  title = 'Helloworld-Angular-App';
  message: string = 'Hello from BridgeLabz using One Way Data Bindings';
  logoUrl: string = 'assets/BL_logo_square_jpg.jpg';
  openBridgeLabzSite(): void {
    window.open('https://www.bridgelabz.com', '_blank');
  }

    userName: string = '';
    errorMessage: string = '';
    validateUserName() {
      const namePattern = /^[A-Z]{1}[a-zA-Z]{2,}$/; // Starts with uppercase, min 3 letters
      if (!namePattern.test(this.userName)) {
        this.errorMessage = "Invalid name! Start with a capital letter and use at least 3 characters.";
      } else {
        this.errorMessage = '';
      }
    }
}

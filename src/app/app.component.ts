import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms'; 


@Component({
  selector: 'app-root',
  imports: [RouterOutlet , FormsModule],
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
}

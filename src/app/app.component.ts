import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Helloworld-Angular-App';
  message: string = 'Hello from BridgeLabz using One Way Data Bindings';
  logoUrl: string = 'assets/BL_logo_square_jpg.jpg';
}

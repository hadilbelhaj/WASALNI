import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { LoginComponent } from '../deleted/loginadmin/login.component';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [RouterLink,LoginComponent,RouterOutlet],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
  goToLogIn() {
  }
}

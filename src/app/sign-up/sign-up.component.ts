import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { LoginComponent } from '../deleted/loginadmin/login.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [RouterLink, LoginComponent, RouterOutlet, HttpClientModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css',
})
export class SignUpComponent {
  constructor(private http: HttpClient) {
    this.http
      .post(
        'http://localhost/api/login/login.php',
        `{"email":"hadilbelhaj67@gmail.com","password":"465455"}`
      )
      .subscribe((data) => console.log(data));
  }
  goToLogIn() {}
}

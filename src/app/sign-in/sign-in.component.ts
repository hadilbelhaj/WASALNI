
import { Component, Injectable } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [RouterLink, RouterOutlet, NgIf, FormsModule, HttpClientModule],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css',
})
export class SignInComponent {

  email = '';
  password = '';
  submitted = false;

  constructor(private http: HttpClient, private router: Router) {}

  onSubmit() {
    this.submitted = true;
    this.http
      .post('http://localhost/api/login/login.php', {
        email: this.email,
        password: this.password,
      })
      .subscribe(
        (reponse: any) => {
          console.log('reponse', reponse);
          alert('login succefful');
          this.router.navigate(['/profile']);
        },
        (error) => {
          console.error(error);
        }
      );
  }
}

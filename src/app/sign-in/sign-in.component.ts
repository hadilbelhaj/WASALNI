<<<<<<< HEAD
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
=======
import { Component, Injectable } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { NgIf } from '@angular/common';
>>>>>>> f7bacc67804d46d92361c9ea71d237c6cd7f8268

@Component({
  selector: 'app-sign-in',
  standalone: true,
<<<<<<< HEAD
  imports: [RouterLink,RouterOutlet,HttpClientModule],
=======
  imports: [RouterLink, RouterOutlet, NgIf, FormsModule, HttpClientModule],
>>>>>>> f7bacc67804d46d92361c9ea71d237c6cd7f8268
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css',
})
export class SignInComponent {
<<<<<<< HEAD
 constructor(private http:HttpClientModule){}
 fetch(){
  fetch('http://localhost/api/index.php')
    .then(response => {
      // Check if the response is successful
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      // Parse the JSON response
      return response.json();
    })
    .then(data => {
      // Work with the data
      console.log(data);
    })
    .catch(error => {
      // Handle any errors
      console.error('There was a problem with the fetch operation:', error);
    });

  }
 ngOnInit():void{
  this.fetch();
 }
=======
  public email = '';
  public password = '';
  submitted = false;
>>>>>>> f7bacc67804d46d92361c9ea71d237c6cd7f8268

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

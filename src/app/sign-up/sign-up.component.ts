import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { NgModel } from '@angular/forms';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [
    RouterLink,
    RouterOutlet,
    HttpClientModule,
    FormsModule,
  ],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css',
})
export class SignUpComponent {
  public email = '';
  public password = '';
  public fullname = '';
  public username = '';
  public typeaccount = '';
  submitted = false;
  constructor(private http: HttpClient, private router: Router) {}
  onCreate() {
    this.submitted = true;
    this.http
      .post('http://localhost/api/login/signin.php', {
        email: this.email,
        password: this.password,
        fullname: this.fullname,
        username: this.username,
        type: this.typeaccount,
      })
      .subscribe(
        (reponse: any) => {
          console.log('reponse', reponse);
          alert('creation succeful');
          this.router.navigate(['/profile']);
        },
        (error) => {
          console.error(error);
        }
      );
  }
}

import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [RouterLink,RouterOutlet,HttpClientModule],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {
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

}

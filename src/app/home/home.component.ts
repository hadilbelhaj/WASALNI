import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  constructor(private route: Router) {
  }

  goTosignup() {
    this.route.navigate(['sign-up']);
  }
  goTosignin() {
    this.route.navigate(['sign-in']);
  }
}

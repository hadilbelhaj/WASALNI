import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export class ProfileComponent {
  constructor(private route: Router) {}
  goToGerer() {
    this.route.navigate(['ajoutmoyentransport']);
  }
  goToEnregist() {
    this.route.navigate(['enregistrervoyage']);
  }
}

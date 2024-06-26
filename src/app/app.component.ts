import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './about/about.component';
import { EnregistrervoyageComponent } from './enregistrervoyage/enregistrervoyage.component';
import { ProfileComponent } from './profile/profile.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [
    RouterOutlet,
    FormsModule,
    AboutComponent,
    RouterModule,
    EnregistrervoyageComponent,
    ProfileComponent,
  ],
})
export class AppComponent {
}

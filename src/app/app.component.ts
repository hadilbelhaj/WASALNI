import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './about/about.component';
import { EnregistrervoyageComponent } from './enregistrervoyage/enregistrervoyage.component';
import { AjoutmoyentransportComponent } from './ajoutmoyentransport/ajoutmoyentransport.component';
import { ProfileComponent } from './profile/profile.component';
import { SignInComponent } from './sign-in/sign-in.component';
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
  title = 'hi';
}

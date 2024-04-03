import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { HadilComponent } from './hadil/hadil.component';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './about/about.component';
import { EnregistrervoyageComponent } from './enregistrervoyage/enregistrervoyage.component';
import { AjoutmoyentransportComponent } from './ajoutmoyentransport/ajoutmoyentransport.component';
import { ProfileComponent } from './profile/profile.component';
@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [
    RouterOutlet,
    HadilComponent,
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

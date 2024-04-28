import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './about/about.component';
import { EnregistrervoyageComponent } from './enregistrervoyage/enregistrervoyage.component';
import { ProfileComponent } from './profile/profile.component';
<<<<<<< HEAD

=======
import { SignInComponent } from './sign-in/sign-in.component';
>>>>>>> f7bacc67804d46d92361c9ea71d237c6cd7f8268

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

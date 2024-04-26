import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AboutComponent } from '../about/about.component';
import { Router } from '@angular/router';
import { ServiceShService } from '../services/service-sh.service';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  title:
    | string
    | string[]
    | Set<string>
    | { [klass: string]: any }
    | null
    | undefined;
  constructor(private route: Router, private share: ServiceShService) {
    console.log(this.share.data);
  }

  add(f: NgForm) {
    console.log(f);
  }
  goTosignup() {
    this.route.navigate(['sign_up']);
  }
  goToLogIn() {
    this.route.navigate(['sign-in']);
  }
}
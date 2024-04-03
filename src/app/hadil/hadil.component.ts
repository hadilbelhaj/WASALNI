import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AboutComponent } from '../about/about.component';
import { Router } from '@angular/router';
import { ServiceShService } from '../services/service-sh.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-hadil',
  standalone: true,
  templateUrl: './hadil.component.html',
  styleUrl: './hadil.component.css',
  imports: [AboutComponent, FormsModule, CommonModule],
})
export class HadilComponent {
  name = 'hadilbelhaj';
  lastName = 'idris';
  mail = 'hadilbelhaj67@gmail.com';
  country = 'tunisi';
  butt = 'color:red';
  number = 1;
  titleStyle = 'block';
  arrayOf = ['h', 'f', 'd'];
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
  inc() {
    this.number++;
  }
  dec() {
    this.number--;
  }
  show() {
    this.titleStyle = 'block';
  }
  hidden() {
    this.titleStyle = 'none';
  }
  add(f: NgForm) {
    console.log(f);
  }
  goTosignin() {}
  goToLogIn() {
    this.route.navigate(['/loginadmin']);
  }
}

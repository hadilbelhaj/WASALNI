import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-enregistrervoyage',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './enregistrervoyage.component.html',
  styleUrl: './enregistrervoyage.component.css',
})
export class EnregistrervoyageComponent {
  constructor(private route: Router) {}
}

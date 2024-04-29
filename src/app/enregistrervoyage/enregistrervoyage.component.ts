import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-enregistrervoyage',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './enregistrervoyage.component.html',
  styleUrl: './enregistrervoyage.component.css',
})
export class EnregistrervoyageComponent {
  selectedDepart="Tunis Centre";
  selectedArrivee="Tunis Centre";
  secteurs=["Tunis Centre","La Marsa","Carthage","El Menzah","Le Bardo","El Omrane","Bab Bhar","Bab Souika"];
  heureDepart="1:00";
  heureArrivee="2:00";
  heures=["1:00","2:00","3:00","4:00","5:00","6:00",'7:00',"8:00","9:00","10:00","11:00","12:00"];

}

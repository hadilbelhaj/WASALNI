import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Data, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-consulter-secteur',
  standalone: true,
  imports: [RouterOutlet,FormsModule,CommonModule],
  templateUrl: './consulter-secteur.component.html',
  styleUrl: './consulter-secteur.component.css'
})
export class ConsulterSecteurComponent {
  selectedDepart ="Tunis Centre";
  selectedArrivee ="Tunis Centre";
  secteurs=["Tunis Centre","La Marsa","Carthage","El Menzah","Le Bardo","El Omrane","Bab Bhar","Bab Souika"];
  
  fOk(resp:Response){
    console.log("hello");
    return resp.json();
  }
  fGet(data:Data){
    console.log(data);
  }
  getData(){
    fetch("http://localhost/api/secteurs.php?ville_dep="+this.selectedDepart+"&ville_arr="+this.selectedArrivee).then(this.fOk).then(this.fGet);
  }
  check(){
    if (this.selectedArrivee==this.selectedDepart){
      alert("Vous devez séléctionnez différents villes ");
    }else {
      this.getData();
    }
  }
}

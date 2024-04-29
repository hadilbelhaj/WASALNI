import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Data, Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-consulter-secteur',
  standalone: true,
  imports: [RouterOutlet,FormsModule,CommonModule],
  templateUrl: './consulter-secteur.component.html',
  styleUrl: './consulter-secteur.component.css'
})
export class ConsulterSecteurComponent {
  idSecteur=-1;
  selectedDepart ="Tunis Centre";
  selectedArrivee ="Tunis Centre";
  secteurs=["Tunis Centre","La Marsa","Carthage","El Menzah","Le Bardo","El Omrane","Bab Bhar","Bab Souika"];
  
  constructor(private router:Router){}
  async goToListVoyage(){
    alert("working");
    if (this.selectedArrivee==this.selectedDepart){
      alert("Vous devez séléctionnez différents villes ");

    }else {
      let url="http://localhost/api/secteurs.php?ville_dep="+this.selectedDepart+"&ville_arr="+this.selectedArrivee;
      await fetch(url).then(resp=>resp.json()).then(data=>{      
        this.idSecteur=data[0]["id"];
      });
      console.log(this.idSecteur);
      this.router.navigate(['/list-voyage']);

    }
  }
}

import { CommonModule, Time } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-modifier-voyage',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './modifier-voyage.component.html',
  styleUrl: './modifier-voyage.component.css'
})
export class ModifierVoyageComponent implements OnInit {
  voyageId=-1;
  temp_dep ="";
  temp_arr ="";
  initial_temp_dep ="";
  initial_temp_arr ="";

  constructor(private route: ActivatedRoute) {}
  
  modifierVoyage(){
    if (this.temp_dep!=this.initial_temp_dep || this.temp_arr!=this.initial_temp_arr){
      let url = `http://localhost/api/modifier_voyage.php?voyageId=${this.voyageId}&temp_dep=${this.temp_dep}&temp_arr=${this.temp_arr}`;
      let configData={
        method:"PUT",
      };
      fetch(url,configData).then(resp=>resp.json()).then(data=>{
        if (data['status']=="success"){
          alert("Modifié avec succèe");
        }else {
          alert("Modification échoué");
        }
      });
    }else {
      alert("Vous devez changer l'intervalle du temp");
    }
  }
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.voyageId = params['voyageId'];
      this.temp_dep = params['temp_dep'];
      this.temp_arr = params['temp_arr'];
      this.initial_temp_arr=this.temp_arr;
      this.initial_temp_dep=this.temp_dep;
    });
  }
  
}

import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Data, Router, RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-list-voyage',
  standalone: true,
  imports: [RouterOutlet,FormsModule,CommonModule],
  templateUrl: './list-voyage.component.html',
  styleUrl: './list-voyage.component.css'
})
export class ListVoyageComponent implements OnInit{
  constructor(private router: Router, private route: ActivatedRoute) {}
  secteurId=1;
  prixBus=0;
  prixMetro=0;
  voyagesBus: any[]=[];
  voyagesMetro: any[]=[];
  getVoyages() {
    let url = "http://localhost/api/voyages.php?secteurId=" + this.secteurId;
    fetch(url)
      .then(resp => resp.json())
      .then(data => {
        this.voyagesBus=data['bus'];
        if (this.voyagesBus.length>0){
          this.prixBus=this.voyagesBus[0].prix;  
        } 
        this.voyagesMetro=data['metro'];
        if (this.voyagesMetro.length>0){
          this.prixMetro=this.voyagesMetro[0].prix;
        }
      })
      .catch(error => console.error('Error fetching voyages:', error));
  }
  goToAjouterVoyage(){
    this.router.navigate(['/ajouter-voyage']);
  }
  goToModifierVoyage(voyageId:number,temp_dep:string,temp_arr:string){
    this.router.navigate(['/modifier_voyage'],{ queryParams: { voyageId: voyageId, temp_dep:temp_dep,temp_arr:temp_arr} });
  }
  supprimerVoyage(voyageId:number){
    let url = "http://localhost/api/supprimer_voyage.php?voyageId=" + voyageId;
    let configData={
      method:"delete",
    };

    fetch(url,configData).then(resp=>resp.json()).then(data=>{
      if (data["status"]=="success"){
        alert("supprimer avec succèe vous devez rafraîchir la page");
      }else {
        alert("suppression échoué");
      }
    }).catch(error => console.error('Error deleting voyage:', error));;
  }
  ngOnInit(){
    this.route.queryParams.subscribe(params => {
      this.secteurId = params['idSecteur'];
    });
    this.getVoyages();
  }
}

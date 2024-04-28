import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Data, RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-list-voyage',
  standalone: true,
  imports: [RouterOutlet,FormsModule,CommonModule],
  templateUrl: './list-voyage.component.html',
  styleUrl: './list-voyage.component.css'
})
export class ListVoyageComponent implements OnInit{
  
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
  ngOnInit(){
    this.getVoyages();
  }
}

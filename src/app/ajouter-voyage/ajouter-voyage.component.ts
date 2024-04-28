import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Data } from '@angular/router';

@Component({
  selector: 'app-ajouter-voyage',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './ajouter-voyage.component.html',
  styleUrl: './ajouter-voyage.component.css'
})
export class AjouterVoyageComponent {
  voyage={
    secteur : 1,
    matricule : "",
    temp_arr : "",
    temp_dep : "",
    prix: 0,
  }

fOk(resp:Response){
  return resp.json();
}
fData(data:Data){
  if (data["status"]=="success"){
    alert("ajouté avec succèe");
  }else {
    alert(data["message"]);
  }
}
  ajouterVoyage(){
    if (this.voyage.matricule!="" && this.voyage.temp_arr!="" && this.voyage.temp_dep!="" && this.voyage.prix!=0){    
    let url="http://localhost/api/add_voyage.php";
    let configData={
      method: 'POST',
      body: JSON.stringify(this.voyage)
    }
    fetch(url,configData).then(this.fOk).then(this.fData);
  }else{
    alert("il faut remplir tout les champs");
  }
}
}

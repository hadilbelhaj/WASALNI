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
    secteur :1,
    matricule : "",
    temp_arr : "",
    temp_dep : "",
    prix:0,
  }

fOk(resp:Response){
  return resp.json();
}
fData(data:Data){
  if (data["status"]=="success"){
    alert("ajouté avec succè");
  }else {
    alert("ajout échoué");
  }
}
ajouterVoyage(){
  console.log(this.voyage);
  let url="http://localhost/api/add_voyage.php";
  let configData={
    method:"POST",
    data:JSON.stringify(this.voyage),
  }
  fetch(url,configData).then(this.fOk).then(this.fData);
}

}

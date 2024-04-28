import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Data } from '@angular/router';

@Component({
  selector: 'app-ajoutmoyentransport',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './ajoutmoyentransport.component.html',
  styleUrl: './ajoutmoyentransport.component.css'
})
export class AjoutmoyentransportComponent {
  transport={
    nom:"Bus",
    etat:"Disponible",
    matricule:"1111x1111",
    societeId:1,
  };
  fOk(resp:Response){
    return resp.json();
  }
  fData(data:Data){
    if (data["status"]=="success"){
      alert("ajout avec succèe");
    }else {
      alert(data["message"]);
    }
  }
  AjouterMoyenTranport(){
    console.log(JSON.stringify(this.transport));
    let url="http://localhost/api/add_moyen_transport.php";
    let configData={
      method:'POST',
      body:JSON.stringify(this.transport),
    }
    fetch(url,configData).then(this.fOk).then(this.fData);
  }
}

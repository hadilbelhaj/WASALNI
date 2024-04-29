import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { EnregistrervoyageComponent } from './enregistrervoyage/enregistrervoyage.component';
import { AjoutmoyentransportComponent } from './ajoutmoyentransport/ajoutmoyentransport.component';
import { ProfileComponent } from './profile/profile.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HomeComponent } from './home/home.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { ConsulterSecteurComponent } from './consulter-secteur/consulter-secteur.component';
import { AjouterVoyageComponent } from './ajouter-voyage/ajouter-voyage.component';
// import { ModifierSupprimerVoyageComponent } from './modifier-supprimer-voyage/modifier-supprimer-voyage.component';
import { ListVoyageComponent } from './list-voyage/list-voyage.component';
import { ModifierVoyageComponent } from './modifier-voyage/modifier-voyage.component';
export const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'ajoutmoyentransport', component: AjoutmoyentransportComponent },
  { path: 'enregistrervoyage', component: EnregistrervoyageComponent },
  { path: 'home',component:HomeComponent},
  { path :'sign-up',component:SignUpComponent},
  {path:'sign-in',component:SignInComponent},
  {path:'consulter-secteur',component:ConsulterSecteurComponent},
  {path:'ajouter-voyage',component:AjouterVoyageComponent},
  // {path:'modifier-supprimer-voyage',component:ModifierSupprimerVoyageComponent},
  {path:'list-voyage',component:ListVoyageComponent},
  {path : 'modifier_voyage',component:ModifierVoyageComponent}
];

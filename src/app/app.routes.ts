import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { EnregistrervoyageComponent } from './enregistrervoyage/enregistrervoyage.component';
import { AjoutmoyentransportComponent } from './ajoutmoyentransport/ajoutmoyentransport.component';
import { ProfileComponent } from './profile/profile.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HomeComponent } from './home/home.component';
import { SignUpAdminComponent } from './sign-up-admin/sign-up-admin.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { ConsulterSecteurComponent } from './consulter-secteur/consulter-secteur.component';
import { AjouterVoyageComponent } from './ajouter-voyage/ajouter-voyage.component';
import { ConsulterVoyageComponent } from './consulter-voyage/consulter-voyage.component';
import { ModifierSupprimerVoyageComponent } from './modifier-supprimer-voyage/modifier-supprimer-voyage.component';
export const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'voyage', component: EnregistrervoyageComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'ajoutmoyentransport', component: AjoutmoyentransportComponent },
  { path: 'enregistrervoyage', component: EnregistrervoyageComponent },
  { path : 'sign_up',component:SignUpComponent },
  { path: 'home',component:HomeComponent},
  {path:'sign-up',component:SignUpComponent},
  {path:'sign-up-admin',component:SignUpAdminComponent},
  {path:'sign-in',component:SignInComponent},
  {path:'consulter-secteur',component:ConsulterSecteurComponent},
  {path:'ajouter-voyage',component:AjouterVoyageComponent},
  {path:'consulter-voyage',component:ConsulterVoyageComponent},
  {path:'modifier-supprimer-voyage',component:ModifierSupprimerVoyageComponent}
];

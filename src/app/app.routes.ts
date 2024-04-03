import { Routes } from '@angular/router';
import { HadilComponent } from './hadil/hadil.component';
import { AboutComponent } from './about/about.component';
import { ViewComponent } from './view/view.component';
import { EnregistrervoyageComponent } from './enregistrervoyage/enregistrervoyage.component';
import { LoginComponent } from './loginadmin/login.component';
import { AjoutmoyentransportComponent } from './ajoutmoyentransport/ajoutmoyentransport.component';
import { ProfileComponent } from './profile/profile.component';
export const routes: Routes = [
  { path: '', component: HadilComponent },
  { path: 'about', component: AboutComponent },
  { path: 'voyage', component: EnregistrervoyageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'loginadmin', component: LoginComponent },
  { path: 'ajoutmoyentransport', component: AjoutmoyentransportComponent },
  { path: 'enregistrervoyage', component: EnregistrervoyageComponent },
];

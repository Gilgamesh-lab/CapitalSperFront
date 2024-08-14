import { Routes } from '@angular/router';
import { ListePersonnageComponent } from './liste-personnage/liste-personnage.component';
import { DetailPersonnageComponent } from './detail-personnage/detail-personnage.component';

export const routes: Routes = [
    {path: 'personnages', component: ListePersonnageComponent},
    {path: 'personnages/:id', component: DetailPersonnageComponent},
    {path: '',  redirectTo: 'personnages', pathMatch: 'full' }
];

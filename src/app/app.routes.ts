import { Routes } from '@angular/router';
import { ListePersonnageComponent } from './liste-personnage/liste-personnage.component';
import { DetailPersonnageComponent } from './detail-personnage/detail-personnage.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


export const routes: Routes = [
    {path: 'personnages', component: ListePersonnageComponent},
    {path: 'personnages/:id', component: DetailPersonnageComponent},
    {path: '',  redirectTo: 'personnages', pathMatch: 'full' },// renvoit à la racine
    {path: '**',  component:PageNotFoundComponent }// intercepte toutes les routes mais vue qu'il est en dernière position... (Angular lit du haut vers le bas)
];

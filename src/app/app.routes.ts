import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


export const routes: Routes = [
    {path: '',  redirectTo: 'personnages', pathMatch: 'full' },// renvoit à la racine
    {path: '**',  component:PageNotFoundComponent }// intercepte toutes les routes mais vue qu'il est en dernière position... (Angular lit du haut vers le bas)
];

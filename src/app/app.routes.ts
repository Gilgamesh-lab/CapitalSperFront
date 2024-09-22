import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
import { ReglesComponent } from './regles/regles.component';
import { PlanDuSiteComponent } from './plan-du-site/plan-du-site.component';


export const routes: Routes = [

    {path: '',  redirectTo: '', pathMatch: 'full' },// renvoit à la racine
    //{path: 'login',  component: LoginComponent},
    {path: 'pageNotFound',  component: PageNotFoundComponent},
    {path: 'regles', component: ReglesComponent},
    {path: 'plan-du-site', component: PlanDuSiteComponent},
    {path: '**',  component: PageNotFoundComponent }// intercepte toutes les routes mais vue qu'il est en dernière position... (Angular lit du haut vers le bas)
];

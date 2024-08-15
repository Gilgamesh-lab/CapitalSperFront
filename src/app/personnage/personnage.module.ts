import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListePersonnageComponent } from './liste-personnage/liste-personnage.component';
import { DetailPersonnageComponent } from './detail-personnage/detail-personnage.component';
import { BorderCardDirective } from './border-card.directive';
import { PersonnageCampColorPipe } from './personnage-camp-color.pipe';
import { PersonnagePouvoirColorPipe } from './personnage-pouvoir-color.pipe';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

export const personnagesRoutes: Routes = [
  {path: 'personnages', component: ListePersonnageComponent},
  {path: 'personnages/:id', component: DetailPersonnageComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ListePersonnageComponent,
     DetailPersonnageComponent,
     BorderCardDirective,
     PersonnageCampColorPipe,
     PersonnagePouvoirColorPipe,
     RouterModule.forChild(personnagesRoutes),
     FormsModule
  ],
  /*providers: [PersonnageService]*/
})
export class PersonnageModule { }

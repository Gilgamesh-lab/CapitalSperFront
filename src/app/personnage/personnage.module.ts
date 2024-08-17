import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListePersonnageComponent } from './liste-personnage/liste-personnage.component';
import { DetailPersonnageComponent } from './detail-personnage/detail-personnage.component';
import { BorderCardDirective } from './border-card.directive';
import { PersonnageCampColorPipe } from './personnage-camp-color.pipe';
import { PersonnagePouvoirColorPipe } from './personnage-pouvoir-color.pipe';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { PersonnageFormComponent } from './personnage-form/personnage-form.component';
import { EditPersonnageComponent } from './edit-personnage/edit-personnage.component';
import { HttpClient} from '@angular/common/http';
import { HttpClientInMemoryWebApiModule, InMemoryDbService } from 'angular-in-memory-web-api';
import { InMemoryDataService } from '../in-memory-data.service';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from '../app.component';
import { AddPersonnageComponent } from './add-personnage/add-personnage.component';
import { authGuard } from '../auth.guard';



export const personnagesRoutes: Routes = [
  {path: 'edit/personnage/:id', component: EditPersonnageComponent, canActivate: [authGuard]},
  {path: 'personnages/add', component:  AddPersonnageComponent, canActivate: [authGuard]},
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
     BrowserModule,
     HttpClient,
     HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation: false}),
     FormsModule,
     PersonnageFormComponent,
     NgModule,
     NgForm,
     NgModel,
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class PersonnageModule { }

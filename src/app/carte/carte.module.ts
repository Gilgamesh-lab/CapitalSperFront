import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListecarteComponent } from './liste-carte/liste-carte.component';
import { DetailcarteComponent } from './detail-carte/detail-carte.component';
import { BorderCardDirective } from './border-card.directive';
import { carteCampColorPipe } from './carte-camp-color.pipe';
import { cartePouvoirColorPipe } from './carte-pouvoir-color.pipe';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { carteFormComponent } from './carte-form/carte-form.component';
import { EditcarteComponent } from './edit-carte/edit-carte.component';
import { HttpClient} from '@angular/common/http';
import { HttpClientInMemoryWebApiModule, InMemoryDbService } from 'angular-in-memory-web-api';
import { InMemoryDataService } from '../in-memory-data.service';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from '../app.component';
import { AddcarteComponent } from './add-carte/add-carte.component';
import { authGuard } from '../auth.guard';
import { CampsComponent } from './camps/camps.component';
import { TypesDePouvoirsComponent } from './types-de-pouvoirs/types-de-pouvoirs.component';
import { typesDeCartes } from './typesDeCartes';
import { TypesDeCartesComponent } from './types-de-cartes/types-de-cartes.component';


export const cartesRoutes: Routes = [
  //{path: 'edit/carte/:id', component: EditcarteComponent, canActivate: [authGuard]},
  //{path: 'cartes/add', component:  AddcarteComponent, canActivate: [authGuard]},
  {path: '', component: ListecarteComponent},
  {path: 'cartes/:id', component: DetailcarteComponent},
  {path: 'camps/:id', component: CampsComponent},
  {path: 'typesDePouvoirs/:id', component: TypesDePouvoirsComponent},
  {path: 'typesDeCartes/:id', component: TypesDeCartesComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ListecarteComponent,
     DetailcarteComponent,
     BorderCardDirective,
     carteCampColorPipe,
     cartePouvoirColorPipe,
     RouterModule.forChild(cartesRoutes),
     RouterModule.forRoot([]),
     BrowserModule,
     HttpClient,
     HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation: false}),
     FormsModule,
     carteFormComponent,
     NgModule,
     NgForm,
     NgModel,
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class carteModule { }

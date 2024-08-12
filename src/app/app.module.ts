import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module'; // Si vous avez un SharedModule
import {BorderCardDirective} from './border-card.directive'

@NgModule({
  declarations: [
    AppComponent,
    // Déclarez ici tous les composants, directives, et pipes de l'application
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BorderCardDirective,
    SharedModule // Si vous avez un SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

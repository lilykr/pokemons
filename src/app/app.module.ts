import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PokemonsComponent } from './components/pokemons/pokemons.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonsComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

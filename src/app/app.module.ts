import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PokemonsListComponent } from './components/pokemons-list/pokemons-list.component';
import { PokemonDetailComponent } from './components/pokemon-detail/pokemon-detail.component';
import { NavComponent } from './components/nav/nav.component';
import { ErrorComponent } from './pages/error/error.component';
import { HomeComponent } from './pages/home/home.component';
import { PokemonComponent } from './pages/pokemon/pokemon.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    PokemonsListComponent,
    PokemonDetailComponent,
    NavComponent,
    ErrorComponent,
    HomeComponent,
    PokemonComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

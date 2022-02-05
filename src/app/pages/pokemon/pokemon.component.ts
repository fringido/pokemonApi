import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonesService } from 'src/app/services/pokemones.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss'],
})
export class PokemonComponent implements OnInit {

  pokemon: any = '';
  pokemonType = [];
  pokemonImg = '';
  pokemonStats = [];

  constructor(
    private pokemonService: PokemonesService,
    private activatedRouter: ActivatedRoute
  ) {
    this.activatedRouter.params.subscribe(
      params => {
      this.getPokemon(params['id']);
    }
    );
  }

  ngOnInit(): void {}

  getPokemon(id: string) {
    this.pokemonService.getMoreData(id).subscribe(
      res => {
      this.pokemon = res;
      this.pokemonImg = this.pokemon.sprites.front_default;
      this.pokemonType = this.pokemon.types[0].type.name;
      this.pokemonStats = this.pokemon.stats[0].base_stat;
      console.log(this.pokemonStats);

    });
  }
}

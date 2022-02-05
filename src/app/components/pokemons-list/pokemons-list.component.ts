import { Component, OnInit } from '@angular/core';
import { PokemonesService } from 'src/app/services/pokemones.service';

@Component({
  selector: 'app-pokemons-list',
  templateUrl: './pokemons-list.component.html',
  styleUrls: ['./pokemons-list.component.scss']
})
export class PokemonsListComponent implements OnInit {

  pokemons: any[] = [];

  constructor(
    private pokemonService: PokemonesService
  ) { }

  ngOnInit(): void {
    this.pokemonService.getPokemons()
    .subscribe((response: any) => {
      response.results.forEach((result: { name: string; }) =>{
        this.pokemonService.getMoreData(result.name)
        .subscribe((uniqResponse:any) =>{
          this.pokemons.push(uniqResponse);
          console.log(this.pokemons);
        }
        )
      })
    })
  }

}

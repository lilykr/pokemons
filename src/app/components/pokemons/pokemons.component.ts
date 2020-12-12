import { Component, OnInit } from '@angular/core';

import { Pokemon } from '../../../types'
import jsonData from '../../../assets/seed.json'


@Component({
  selector: 'pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})

export class PokemonsComponent implements OnInit {
  // initializing pokemons to an empty array 
  pokemons: Pokemon[] = [];
  filteredPokemons: Pokemon[] = [];
  pokemonTypes: string[] = [];

  constructor() {
  }

  ngOnInit() {
    // setting pokemon data
    this.pokemons = jsonData as Pokemon[];
    this.filteredPokemons = this.pokemons;

    // setting pokemon types
    const allTypes = this.pokemons.map(p => p.type).flat()
    this.pokemonTypes = [...new Set(allTypes)];
  }

  onTypeChange(event: Event) {
    const newType = (event.target as HTMLSelectElement).value
    if (newType  === '')
      this.filteredPokemons = this.pokemons;
    else
      this.filteredPokemons = this.pokemons.filter(p=> p.type.includes(newType))
  }

}

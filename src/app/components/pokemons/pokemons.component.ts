import { Component, OnInit } from '@angular/core';


import { Pokemon } from '../../../types'
import jsonData from '../../../assets/seed.json'


@Component({
  selector: 'pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})

export class PokemonsComponent implements OnInit {
  // initializing pokemons 
  pokemons: Pokemon[] = [];
  filteredPokemons: Pokemon[] = [];
  pokemonTypes: string[] = [];

  // filters
  filterType: string | null = null
  filterNumber: number | null = null
  filterSearchText: string | null = null

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

  onFiltersChange() {
    this.filteredPokemons =
      this.pokemons
        //filter by name
        .filter(p => this.filterSearchText ? p.name.toLowerCase().includes(this.filterSearchText.toLocaleLowerCase()) : true)
        // filter by number
        .filter(p => this.filterNumber ? parseInt(p.id) === this.filterNumber : true)
        // Filter by type
        .filter(p => this.filterType ? p.type.includes(this.filterType) : true)
  }

  onSearchTextChange(event: Event) {
    this.filterSearchText = (event.target as HTMLSelectElement).value
    this.onFiltersChange()
  }

  onNumberChange(event: Event) {
    const numberString = (event.target as HTMLInputElement).value
    if (numberString) {
      this.filterNumber = parseInt(numberString)
    } else {
      this.filterNumber = null
    }
    this.onFiltersChange()
  }

  onTypeChange(event: Event) {
    const newType = (event.target as HTMLSelectElement).value
    this.filterType = newType === '' ? null : newType
    this.onFiltersChange()
  }




}

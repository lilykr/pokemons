import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../../../types'
import jsonData from '../../../assets/seed.json'

@Component({
  selector: 'pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})

export class PokemonsComponent implements OnInit {
  pokemons: Pokemon[] = [];

  constructor() {
  }

  ngOnInit() {
    this.pokemons = jsonData as Pokemon[];
  }

}

import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../../../types'
import jsonData from '../../../assets/seed.json'

@Component({
  selector: 'pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})

export class PokemonsComponent implements OnInit {
  //initializing pokemons to an empty array 
  pokemons: Pokemon[] = [];

  constructor() {
  }

  ngOnInit() {
    //setting pokemon data
    this.pokemons = jsonData as Pokemon[];
  }

}

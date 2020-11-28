import { Component, OnInit } from '@angular/core';
import { Hero } from '../../models/hero'
import { Heroes } from '../../data/mock-heros'

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  selectedHero: Hero = {
    id: 0,
    name: ""
  }

  heroes = Heroes

  updateHeroName(id, tempName) {
    for(let i = 0; i < this.heroes.length; i++){
      if (id == this.heroes[i].id) {
        this.heroes[i].name = tempName
      }
    }
  }
  
  onSelect(hero: Hero) {
    this.selectedHero = hero
  }

  clearSelectedHero() {
    this.selectedHero.id = 0
    this.selectedHero.name =""
  }
  constructor() { }

  ngOnInit(): void {
  }

}

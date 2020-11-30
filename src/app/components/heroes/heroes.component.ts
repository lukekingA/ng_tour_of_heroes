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
    name: "",
    detail: ""
  }

  updateHeroName(tempName) {
    this.selectedHero.name = tempName
  }

  heroes = Heroes
  selectHero(hero: Hero) {
    this.selectedHero.id = hero.id
    this.selectedHero.name = hero.name
    this.selectedHero.detail = hero.detail
  }

  clearSelectedHero() {
    this.selectedHero.id = 0
    this.selectedHero.name =""
  }

  saveSelectedHero() {
    for (let i = 0; i < this.heroes.length; i++){
      let h = this.heroes[i]
      let sh = this.selectedHero
      if (sh.id == h.id) {
        h.name = sh.name
        h.detail = sh.detail
      }
    }
    this.clearSelectedHero()
  }
  constructor() { }

  ngOnInit(): void {
  }

}

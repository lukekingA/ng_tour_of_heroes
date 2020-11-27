import { Component, OnInit } from '@angular/core';
import { Hero } from '../../models/hero'
import { Heroes } from '../../data/mock-heros'

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  tempName = ''

  heroes = Heroes
  // hero: Hero = {
  //   id:1,
  //   name: 'Windstorm'
  // }

  updateHeroName(id, tempName) {
    for(let i = 0; i < this.heroes.length; i++){
      if (id == this.heroes[i].id){
        console.log("IM HERE")
        this.heroes[i].name = tempName
      }
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}

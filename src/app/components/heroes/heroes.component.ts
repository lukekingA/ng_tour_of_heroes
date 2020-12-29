import { Component, OnInit } from '@angular/core';
import { Hero } from '../../models/hero'
//import { Heroes } from '../../data/mock-heros'
import { HeroService } from '../../hero.service'
import { MessageService } from '../../message.service'

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

  private heroes: Hero[];

  selectHero(hero: Hero) {
    this.selectedHero.id = hero.id
    this.selectedHero.name = hero.name
    this.selectedHero.detail = hero.detail
  }

  constructor(private hs: HeroService, private ms: MessageService) {
    
   }

  ngOnInit(): void {
    this.hs.getHeroes().subscribe(h => {
      setTimeout(() => {
        this.ms.add("Got Heroes? Yes we do!!")
        this.heroes = h
      }, 2000)
      
    });
  }

}

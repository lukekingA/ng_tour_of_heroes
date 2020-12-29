import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../../models/hero'
//import { Heroes } from '../../data/mock-heros'
import { HeroService } from '../../hero.service'

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  // hero: Hero = {
  //   id: 0,
  //   name: "",
  //   detail: ""
  // }
  @Input() hero: Hero;

  private heroes: Hero[];

  updateHeroName(tempName) {
    this.hero.name = tempName
  }

  clearSelectedHero() {
    this.hero.id = 0
    this.hero.name =""
  }

  saveSelectedHero() {
    for (let i = 0; i < this.heroes.length; i++){
      let h = this.heroes[i]
      let sh = this.hero
      if (sh.id == h.id) {
        h.name = sh.name
        h.detail = sh.detail
      }
    }
    this.clearSelectedHero()
  }

  constructor(private hs: HeroService) {
    
   }

  ngOnInit(): void {
    this.hs.getHeroes().subscribe(h => this.heroes = h);
  }

}

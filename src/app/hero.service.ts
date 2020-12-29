import { Injectable } from '@angular/core';
import { Hero } from './models/hero';
import { Heroes } from './data/mock-heros';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  getHeroes(): Observable<Hero[]> {
    return of(Heroes);
  }

  constructor() { }
}

import { Injectable } from '@angular/core';
import { interval } from 'rxjs';
import { map } from 'rxjs/operators';
import { Fruit } from './fruit';

@Injectable({
  providedIn: 'root'
})
export class FruitService {
  fruits: Fruit[] = [
    {
      name: 'Grapes',
      icon: '🍇'
    },
    {
      name: 'Peach',
      icon: '🍑'
    },
    {
      name: 'Cherries',
      icon: '🍒'
    },
    {
      name: 'Strawberry',
      icon: '🍓'
    },
    {
      name: 'Mengo',
      icon: '🥭'
    },
    {
      name: 'Banana',
      icon: '🍌'
    },
    {
      name: 'Kiwi',
      icon: '🥝'
    },
    {
      name: 'Watermelon',
      icon: '🍉'
    },
    {
      name: 'Tangerine',
      icon: '🍊'
    },
    {
      name: 'Lemon',
      icon: '🍋'
    },
    {
      name: 'Pineapple',
      icon: '🍍'
    },
    {
      name: 'Coconut',
      icon: '🥥'
    },
    {
      name: 'Pear',
      icon: '🍐'
    },
    {
      name: 'Red Apple',
      icon: '🍎'
    },
    {
      name: 'Green Apple',
      icon: '🍏'
    }
  ];
  // observable display fruit every second
  public obs$ = interval(1000).pipe(
    map(_=>  this.fruits[Math.floor(Math.random()*this.fruits.length)])
  )
  constructor() {}
}

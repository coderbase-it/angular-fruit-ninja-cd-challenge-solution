import { ChangeDetectorRef, Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { Fruit } from './fruit';
import { FruitService } from './fruit.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  selectedFruits = [
    {
      name: 'Mengo',
      icon: '🥭',
    },
  ];
  fruits: Fruit[];
  fruitControl = new FormControl(this.selectedFruits[0]);
  randomFruit: Fruit;
  obs: Fruit;

  constructor(
    private fruitService: FruitService,
    private cd: ChangeDetectorRef
  ) {
    this.fruits = this.fruitService.fruits;
    //this.fruitService.obs$.subscribe((data) => (this.obs = data));
  }

  addFruit() {
    console.log(this.fruitControl.value);
    //this.selectedFruits.push(this.fruitControl.value);
    //this.cd.markForCheck();
    this.selectedFruits = [...this.selectedFruits, this.fruitControl.value];
  }
  compareFn(optionOne, optionTwo): boolean {
    return optionOne.name === optionTwo.name;
  }

  fakeMethod() {}
  check() {
    console.log('Check from AppComponent');
  }
}

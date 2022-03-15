import { Pipe, PipeTransform } from '@angular/core';
import { Fruit } from './fruit';

@Pipe({
  name: 'showFruit',
})
export class ShowFruitPipe implements PipeTransform {
  
  transform(fruit: Fruit, args?: any): any {
    return this.showFruit(fruit)
  }

  showFruit(fruit: Fruit) {
    console.log(fruit);
    return fruit.icon + ' * ' + fruit.name;
  }
  
  

}

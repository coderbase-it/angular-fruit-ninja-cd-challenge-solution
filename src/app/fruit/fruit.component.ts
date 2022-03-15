import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { Fruit } from '../fruit';

@Component({
  selector: 'app-fruit',
  templateUrl: './fruit.component.html',
  styleUrls: ['./fruit.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FruitComponent implements OnInit {
  @Input() fruit: Fruit;
  constructor() {}

  ngOnInit() {}
  // method to see if CD is apply
  check() {
    console.log('Check from FruitComponent');
  }
  fakeMethod() {}
  
}

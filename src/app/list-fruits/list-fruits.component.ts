import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { Observable } from 'rxjs';
import { Fruit } from '../fruit';
import { FruitService } from '../fruit.service';

@Component({
  selector: 'app-list-fruits',
  templateUrl: './list-fruits.component.html',
  styleUrls: ['./list-fruits.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListFruitsComponent implements OnInit {
  @Input() fruits: Fruit[];
  obs: Fruit;
  obs$: Observable<Fruit>;

  constructor(
    private fruitService: FruitService,
    private cd: ChangeDetectorRef
  ) {
    this.obs$ = this.fruitService.obs$;
    //.subscribe((data) => {
    //   this.obs = data;
    //   console.log(this.obs);
    //   this.cd.detectChanges()
    // });
  }

  ngOnInit() {}
  // method to see if CD is apply
  check() {
    console.log('Check from ListFruitsComponent');
  }
  fakeMethod() {}
}

import { Component, OnInit } from '@angular/core';
import { FilterRadioComponent } from '../../filter-radio/filter-radio.component';
import { Cuisine } from '../cuisine';
import { CuisinesService } from '../cuisines.service';

@Component({
  selector: 'rl-cuisine-radio',
  templateUrl: './cuisine-radio.component.html',
  styleUrls: ['./cuisine-radio.component.less']
})
export class CuisineRadioComponent extends FilterRadioComponent<Cuisine>  implements OnInit {
  createIndividualId(): number {
    return 3567;
  }

  constructor(private cuisineService: CuisinesService) {
    super();
  }

  ngOnInit(): void {
    this.load();
  }

  load(): void {
    this.cuisineService.getCuisines().subscribe(c => {
     this.filters = c
    });
  }
}

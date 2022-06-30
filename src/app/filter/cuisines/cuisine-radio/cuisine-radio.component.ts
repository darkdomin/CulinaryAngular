import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Cuisine } from '../cuisine';
import { CuisinesService } from '../cuisines.service';

@Component({
  selector: 'rl-cuisine-radio',
  templateUrl: './cuisine-radio.component.html',
  styleUrls: ['./cuisine-radio.component.less']
})
export class CuisineRadioComponent implements OnInit {

  cuisines!: Cuisine[];
  @Output() loadedCuisine = new EventEmitter<number>();
  constructor(private cuisineService: CuisinesService) {}

  ngOnInit(): void {
    this.loadCuisines();
  }

  loadCuisines(): void {
    this.cuisineService.getCuisines().subscribe(c => {
     this.cuisines = c
    });
  }

  loadFilter(cuisine: Cuisine){
    console.log("posilek id - EXPORTER", cuisine);
    this.loadedCuisine.emit(cuisine.id);
  }

}

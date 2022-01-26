import { Component, OnInit } from '@angular/core';
import { CuisinesService } from '../cuisines.service';
import { Cuisine } from '../cuisine';

@Component({
  selector: 'rl-cuisines-list',
  templateUrl: './cuisines-list.component.html',
  styleUrls: ['./cuisines-list.component.less']
})
export class CuisinesListComponent implements OnInit {

  cuisines!: Cuisine[];
  constructor(private serviceCuisine: CuisinesService) { }

  ngOnInit(): void {
    this.loadCusines();
  }

  loadCusines(): void{
    this.serviceCuisine.getCuisines().subscribe((cuisines)=>{
    this.cuisines = cuisines;
    })
  }
}

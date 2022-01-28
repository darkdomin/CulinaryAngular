import { Component, Input, OnInit } from '@angular/core';
import { CuisinesService } from '../cuisines.service';
import { Cuisine } from '../cuisine';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'rl-cuisines-list',
  templateUrl: './cuisines-list.component.html',
  styleUrls: ['./cuisines-list.component.less']
})
export class CuisinesListComponent implements OnInit {

  @Input() recipesForm!: FormGroup;
  cuisines!: Cuisine[];
  cuisineForm!: FormGroup;
  constructor(private serviceCuisine: CuisinesService,
              private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.loadCusines();
    this.cuisineForm = this.buildCuisineForm();
  }

  loadCusines(): void{
    this.serviceCuisine.getCuisines().subscribe((cuisines)=>{
    this.cuisines = cuisines;
    })
  }

  buildCuisineForm(): FormGroup{
    return this.formBuilder.group({
      id: '',
      name: ''
    })
  }
}

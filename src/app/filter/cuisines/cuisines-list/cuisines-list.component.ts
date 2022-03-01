import { Component, Input, OnInit } from '@angular/core';
import { CuisinesService } from '../cuisines.service';
import { Cuisine } from '../cuisine';
import { FormGroup } from '@angular/forms';
import { DataSeeker } from 'src/app/dataSeeker';

@Component({
  selector: 'rl-cuisines-list',
  templateUrl: './cuisines-list.component.html',
  styleUrls: ['./cuisines-list.component.less']
})
export class CuisinesListComponent extends DataSeeker implements OnInit {

  @Input('cuisineForm') recipesForm!: FormGroup;
  cuisines!: Cuisine[];

  constructor(private serviceCuisine: CuisinesService) {
    super();
  }

  ngOnInit(): void {
    this.loadCusines();
  }

  loadCusines(): void{
    this.serviceCuisine.getCuisines().subscribe((cuisines)=>{
    this.cuisines = cuisines;
    let result = this.getFieldValue('cuisineId', this.recipesForm);
    let id = this.getId(result);
    this.setForm(id);
    })
  }
    getId(fieldValueResult: string): number {
      return this.cuisines.find((e) => e.name == fieldValueResult)!.id;
    }

    setForm(id: number){
      this.recipesForm.patchValue({
        cuisineId: id,
      });
    }
}

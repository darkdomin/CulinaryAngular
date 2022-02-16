import { Component, Input, OnInit } from '@angular/core';
import { CuisinesService } from '../cuisines.service';
import { Cuisine } from '../cuisine';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'rl-cuisines-list',
  templateUrl: './cuisines-list.component.html',
  styleUrls: ['./cuisines-list.component.less']
})
export class CuisinesListComponent implements OnInit {

  @Input('cuisineForm') recipesForm!: FormGroup;
  cuisines!: Cuisine[];

  constructor(private serviceCuisine: CuisinesService) { }

  ngOnInit(): void {
    this.loadCusines();
  }

  loadCusines(): void{
    this.serviceCuisine.getCuisines().subscribe((cuisines)=>{
    this.cuisines = cuisines;
    this.getCuisineName();
    this.getCuisineId();
    this.setForm();
    })
  }

    // pobiera wybraną nazwe z formy
    getCuisineName(): string {
      return this.recipesForm.get('cuisineId')?.value;

    }
    //pobiera Id z przypisanej nazwy
    getCuisineId(): number {
      return this.cuisines.find((e) => e.name == this.getCuisineName())!.id;
    }
    //Przypisuje Id do formy
    setForm(){
      this.recipesForm.patchValue({
        cuisineId: this.getCuisineId(),
      });
    }
}

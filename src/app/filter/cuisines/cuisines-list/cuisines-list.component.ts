import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CuisinesService } from '../cuisines.service';
import { Cuisine } from '../cuisine';
import { FormGroup } from '@angular/forms';
import { FilterData } from 'src/app/filter/collection';
import { Recipe } from 'src/app/recipes/models/recipe';
import { FormMy } from 'src/app/form';


@Component({
  selector: 'rl-cuisines-list',
  templateUrl: './cuisines-list.component.html',
  styleUrls: ['./cuisines-list.component.less'],
})
export class CuisinesListComponent  implements OnInit {
  @Input('cuisineForm') recipesForm!: FormGroup;
  cuisines!: Cuisine[];
  @Output() exportedForm = new EventEmitter<Recipe>();

  constructor(private serviceCuisine: CuisinesService) {}

  ngOnInit(): void {
    this.loadCusines();
  }

  loadCusines(): void {
    this.serviceCuisine.getCuisines().subscribe((cuisines) => {
      const cuisine = new FilterData<Cuisine>(cuisines);
      this.cuisines = cuisines;
      const form = new FormMy(this.recipesForm);
      let resultName = form.getFieldValue('cuisineId');
      let id = cuisine.getId(resultName);
      //do przeniesienia
      this.recipesForm.patchValue({
        cuisineId: id,
      });
    });
  }

  outFormGroup() {
    const cuisine = new FilterData<Cuisine>(this.cuisines);
    const form = new FormMy(this.recipesForm);
    let recipe: Recipe = form.getValue();
    recipe.cuisineId = cuisine.getName(+recipe.cuisineId);
    this.exportedForm.emit(recipe);
  }
}

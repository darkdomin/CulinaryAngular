import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipesService } from '../recipes.service';
import { Recipe } from '../models/recipe';

@Component({
  selector: 'rl-recipes-details',
  templateUrl: './recipes-details.component.html',
  styleUrls: ['./recipes-details.component.less'],
})
export class RecipesDetailsComponent implements OnInit {

  recipe!: Recipe;

  constructor(
    private recipesService: RecipesService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
      this.loadRecipe();
  }

  loadRecipe() {
     this.recipe = this.route.snapshot.data['recipe'];
  }
}

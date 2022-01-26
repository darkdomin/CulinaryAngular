import { Component, OnInit } from '@angular/core';
import { Recipe } from '../models/recipe';

@Component({
  selector: 'rl-recipes-creator',
  templateUrl: './recipes-creator.component.html',
  styleUrls: ['./recipes-creator.component.less']
})
export class RecipesCreatorComponent implements OnInit {

  creator!: Recipe;
  constructor() {
  }

  ngOnInit(): void {
  }
}

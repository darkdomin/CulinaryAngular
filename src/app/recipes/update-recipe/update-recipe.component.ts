import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';


@Component({
  selector: 'rl-update-recipe',
  templateUrl: './update-recipe.component.html',
  styleUrls: ['./update-recipe.component.less']
})
export class UpdateRecipeComponent implements OnInit {

  @Input('updateForm') recipesForm!: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }
}

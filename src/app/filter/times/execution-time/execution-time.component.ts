import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Time } from '../model/time';
import { ExecutionTimeService } from '../execution-time.service';
import { FormGroup } from '@angular/forms';
import { FilterData } from 'src/app/filter/collection';
import { FormMy } from 'src/app/form';
import { Recipe } from 'src/app/recipes/models/recipe';


@Component({
  selector: 'rl-execution-time',
  templateUrl: './execution-time.component.html',
  styleUrls: ['./execution-time.component.less'],
})
export class ExecutionTimeComponent implements OnInit {
  @Input('timeForm') recipesForm!: FormGroup;
  times!: Time[];
  @Output() exportedTimeForm = new EventEmitter<Recipe>();

  constructor(private timeService: ExecutionTimeService) {}

  ngOnInit(): void {
    this.loadTimes();
  }
  loadTimes(): void {
    this.timeService.getTimes().subscribe(times => {
      const time = new FilterData<Time>(times);
      this.times = times;
      const form = new FormMy(this.recipesForm);
      let resultName = form.getFieldValue('timeId');
      let id = time.getId(resultName);
      //do przeniesienia
      this.recipesForm.patchValue({
        timeId: id,
      });
    });
  }

  outFormGroup() {
    const time = new FilterData<Time>(this.times);
    const form = new FormMy(this.recipesForm);
    let recipe: Recipe = form.getValue();
    recipe.timeId = time.getName(+recipe.timeId);
    this.exportedTimeForm.emit(recipe);
  }

}

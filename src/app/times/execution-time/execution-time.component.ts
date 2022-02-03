import { Component, Input, OnInit } from '@angular/core';
import { Time } from '../model/time';
import { ExecutionTimeService } from '../execution-time.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'rl-execution-time',
  templateUrl: './execution-time.component.html',
  styleUrls: ['./execution-time.component.less']
})
export class ExecutionTimeComponent implements OnInit {

  @Input('timeForm') recipesForm!: FormGroup;
  times!: Time[];
  timeForm!: FormGroup;
  constructor(private timeService: ExecutionTimeService,
              private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.loadTimes();
    this.timeForm = this.buildMealForm();
  }
  loadTimes(): void{
    this.timeService.getTimes().subscribe((times)=>{
      this.times = times
    })
  }
  buildMealForm(): FormGroup{
    return this.formBuilder.group({
      id: '',
      name: ''
    })
  }
}

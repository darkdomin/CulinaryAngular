import { Component, Input, OnInit } from '@angular/core';
import { Time } from '../model/time';
import { ExecutionTimeService } from '../execution-time.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'rl-execution-time',
  templateUrl: './execution-time.component.html',
  styleUrls: ['./execution-time.component.less'],
})
export class ExecutionTimeComponent implements OnInit {
  @Input('timeForm') recipesForm!: FormGroup;
  times!: Time[];

  constructor(private timeService: ExecutionTimeService) {}

  ngOnInit(): void {
    this.loadTimes();
  }
  loadTimes(): void {
    this.timeService.getTimes().subscribe((times) => {
      this.times = times;
      this.getTimeName();
      this.getTimeId();
      this.setForm();
    });
  }

  // pobiera wybraną nazwe z formy
  getTimeName(): string {
    return this.recipesForm.get('timeId')?.value;
  }
  //pobiera Id z przypisanej nazwy
  getTimeId(): number {
    return this.times.find((e) => e.name == this.getTimeName())!.id;
  }
  //Przypisuje Id do formy
  setForm() {
    this.recipesForm.patchValue({
      timeId: this.getTimeId(),
    });
  }
}

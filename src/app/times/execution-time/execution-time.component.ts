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
      let result = this.getName(this.recipesForm,'timeId');
      this.getTimeId(result);
      this.setForm(result);
    });
  }
  getName(form: FormGroup, name: string): string {
      return form.get(name)?.value;
  }

  //pobiera Id z przypisanej nazwy
  getTimeId(name: string): number {
    return this.times.find((e) => e.name == name)!.id;
  }
  //Przypisuje Id do formy
  setForm(name: string) {
    this.recipesForm.patchValue({
      timeId: this.getTimeId(name),
    });
  }
}

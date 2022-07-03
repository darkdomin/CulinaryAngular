import { Component, OnInit } from '@angular/core';
import { ExecutionTimeService } from '../execution-time.service';
import { Time } from '../model/time';
import { FilterRadioComponent } from '../../filter-radio/filter-radio.component';

@Component({
  selector: 'rl-time-radio',
  templateUrl: './time-radio.component.html',
  styleUrls: ['./time-radio.component.less']
})
export class TimeRadioComponent extends FilterRadioComponent<Time> implements OnInit {

  constructor(private timeService: ExecutionTimeService) {
    super();
  }

  ngOnInit(): void {
    this.load();
  }

  load(): void {
    this.timeService.getTimes().subscribe(t => {
     this.filters = t
    });
  }

  createIndividualId(): number {
    return 6745;
  }
}

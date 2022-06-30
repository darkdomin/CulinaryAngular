import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ExecutionTimeService } from '../execution-time.service';
import { Time } from '../model/time';

@Component({
  selector: 'rl-time-radio',
  templateUrl: './time-radio.component.html',
  styleUrls: ['./time-radio.component.less']
})
export class TimeRadioComponent implements OnInit {


  times!: Time[];
  @Output() loadedTime = new EventEmitter<number>();
  constructor(private timeService: ExecutionTimeService) {}

  ngOnInit(): void {
    this.loadTimes();
  }

  loadTimes(): void {
    this.timeService.getTimes().subscribe(t => {
     this.times = t
    });
  }

  loadFilter(time: Time){
    console.log("posilek id - EXPORTER", time);
    this.loadedTime.emit(time.id);
  }
}

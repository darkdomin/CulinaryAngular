import { Component, OnInit } from '@angular/core';
import { Time } from '../model/time';
import { ExecutionTimeService } from '../execution-time.service';

@Component({
  selector: 'rl-execution-time',
  templateUrl: './execution-time.component.html',
  styleUrls: ['./execution-time.component.less']
})
export class ExecutionTimeComponent implements OnInit {

  times!: Time[];
  constructor(private timeService: ExecutionTimeService) { }

  ngOnInit(): void {
    this.loadTimes();
  }
  loadTimes(): void{
    this.timeService.getTimes().subscribe((times)=>{
      this.times = times
    })
  }
}

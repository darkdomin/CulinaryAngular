import { Component, EventEmitter, Input, Output} from '@angular/core';


@Component({
  selector: 'rl-alertDelete',
  templateUrl: './alertDelete.component.html',
  styleUrls: ['./alertDelete.component.less']
})
export class AlertDeleteComponent<T>  {

  @Input() dataText!: string;
  @Input() data!: T;
  @Input() switcher!: boolean;
  @Output() removedData = new EventEmitter<T>();
  @Output() switched = new EventEmitter<boolean>();

  switchRemove(){
    this.switched.emit(this.switcher);
  }

  removeData(data: T){
    this.removedData.emit(data);
  }
}

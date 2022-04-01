import { Component, Input} from '@angular/core';

@Component({
  selector: 'rl-header-body',
  templateUrl: './header-body.component.html',
  styleUrls: ['./header-body.component.less']
})
export class HeaderBodyComponent  {

  @Input()
  headerText!: string;

}

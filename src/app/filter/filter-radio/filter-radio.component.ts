import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'rl-filter-radio',
  templateUrl: './filter-radio.component.html',
  styleUrls: ['./filter-radio.component.less']
})
export abstract class FilterRadioComponent<T extends Filter>  {

  @Input() filterId!: number;
  filters!: T[];
  @Output() loadedFilter = new EventEmitter<number>();

  loadFilter(filter: T){
    console.log("posilek id - EXPORTER", filter);
    this.loadedFilter.emit(filter.id);
  }

  checkedButton(cuisine : T): string {
    if(this.filterId == cuisine.id){
      return 'checked';
    }
    return '';
  }

  abstract load(): void;
  abstract createIndividualId(): number
}

interface Filter {
  id: number;
  name: string;
}

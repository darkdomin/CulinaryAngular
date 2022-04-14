import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Recipe } from '../../models/recipe';

@Component({
  selector: 'rl-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.less']
})
export class PaginatorComponent {

  pageSize: number = 3;
  tableSizes: number[] = [3, 5, 10, 15];
  page: number = 1;
  @Input("total") totalItem: number = 0;
  @Input('paginatorRecipes') recipes!: Recipe[];
  @Output() changedPageSize = new EventEmitter<number>();
  @Output() changedPage = new EventEmitter<number>();

  handlePageSizeChange(event: any){
    this.pageSize = event.target!.value
    this.changedPageSize.emit(this.pageSize);
  }

  handlePageChange(event: number){
    this.page = event;
    this.changedPage.emit(this.page);
  }
}

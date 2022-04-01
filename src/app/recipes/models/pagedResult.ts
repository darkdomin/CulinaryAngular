import { Recipe } from './recipe';

export interface PagedResult<T>{
  items: T[],
  totalPages: number,
  itemFrom:number,
  itemTo:number,
  totalItemsCount:number
}

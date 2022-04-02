export interface PagedResult<Recipe>{
  items: Recipe[],
  totalPages: number,
  itemFrom:number,
  itemTo:number,
  totalItemsCount:number
}

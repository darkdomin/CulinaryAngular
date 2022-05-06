export class FilterData<T extends myColl> {
  constructor(private col: T[]) {}

  //gets id from name
  public getId(fieldValueResult: string): number {
    return this.col.find((e) => e.name == fieldValueResult)!.id;
  }

  //gets name from id
  public getName(id: number): string {
    return this.col.find((e) => e.id == id)!.name;
  }
}

export interface myColl {
  id: number;
  name: string;
}

import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedMealService {

    filterNameSource$ = new Subject<string>();

    public shareName(name: string){
      this.filterNameSource$.next(name);
    }
}

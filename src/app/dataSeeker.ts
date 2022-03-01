import { FormGroup } from '@angular/forms';

export abstract class DataSeeker {

  // get field value - name
  getFieldValue(fieldName: string, groupForm: FormGroup): string {
    return groupForm.get(fieldName)?.value;
  }

  //gets id from name
  abstract getId(fieldValueResult: string): number;

  //assigns an id to the form 
  abstract setForm(id: number): void;
}

import { FormGroup } from '@angular/forms';

export class FormMy{

  constructor(private form: FormGroup){}

  public getValue(){
    return this.form.value;
  }

  setForm(prop: string, param: number | string): void {
    this.form.patchValue({
      prop: param
    });
  }

  public getFieldValue(arg: string):string {
    return this.form.get(arg)?.value
  }


}

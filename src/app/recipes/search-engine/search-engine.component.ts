import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'rl-search-engine',
  templateUrl: './search-engine.component.html',
  styleUrls: ['./search-engine.component.less']
})
export class SearchEngineComponent implements OnInit {

  searchForm!: FormGroup;
  @Output() inputText = new EventEmitter<string>();
  seek:string = "";

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.searchForm = this.buildForm();
  }

  buildForm(): FormGroup{
    return this.formBuilder.group({
      name: ''
    });
  }

  getSearchEngineText(): string{
    let result = this.searchForm.get('name')?.value;
    this.searchTextEmit(result);
    this.seek = result
    return result;
  }

  private searchTextEmit(searchFormNameValue: string) {
    this.inputText.emit(searchFormNameValue);
  }
}

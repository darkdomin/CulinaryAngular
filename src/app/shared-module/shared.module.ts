import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { AutofocusDirective } from './directives/autofocus.directive';



@NgModule({
  declarations: [
    HeaderComponent,
    AutofocusDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [HeaderComponent]
})
export class SharedModule { }

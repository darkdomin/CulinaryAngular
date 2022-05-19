import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { AutofocusDirective } from './directives/autofocus.directive';
import { AlertDeleteComponent } from './alertDelete/alertDelete.component';



@NgModule({
  declarations: [
    HeaderComponent,
    AutofocusDirective,
    AlertDeleteComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [HeaderComponent, AlertDeleteComponent]
})
export class SharedModule { }

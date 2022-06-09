import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { LayoutComponent } from './layout.component';
import { ListComponent } from './list.component';
import { EditComponent } from './edit.component';
import { SharedModule } from 'src/app/shared-module/index';




@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        UsersRoutingModule,
        SharedModule
    ],
    declarations: [
        LayoutComponent,
        ListComponent,
        EditComponent
    ]
})
export class UsersModule { }

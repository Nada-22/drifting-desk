import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DefaultRoutingModule } from './default-routing.module';
import { HomeComponent } from './home/home.component';
import { TaskComponent } from './task/task.component';


@NgModule({
  declarations: [
    HomeComponent,
    TaskComponent
  ],
  imports: [
    CommonModule,
    DefaultRoutingModule
  ]
})
export class DefaultModule { }

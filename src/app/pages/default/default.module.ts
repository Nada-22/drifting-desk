import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DefaultRoutingModule } from './default-routing.module';
import { TestComponent } from './test/test.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    TestComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    DefaultRoutingModule
  ]
})
export class DefaultModule { }
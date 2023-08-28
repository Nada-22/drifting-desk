import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DefaultRoutingModule } from './default-routing.module';
import { HomeComponent } from './home/home.component';
import { TaskComponent } from './task/task.component';
import { AddLocationComponent } from './add-location/add-location.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LocationsComponent } from './locations/locations.component';


@NgModule({
  declarations: [
    HomeComponent,
    TaskComponent,
    AddLocationComponent,
    LocationsComponent
  ],
  imports: [
    CommonModule,
    DefaultRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class DefaultModule { }

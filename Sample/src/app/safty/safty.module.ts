import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table'

import { SaftyRoutingModule } from './safty-routing.module';
import { SaftyComponent } from './safty.component';


@NgModule({
  declarations: [
    SaftyComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    SaftyRoutingModule
  ]
})
export class SaftyModule { }

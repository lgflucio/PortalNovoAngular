import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { ConversoesRoutingModule } from './conversoes-routing.module';
import { ConversoesComponent } from './conversoes.component';

@NgModule({
  declarations: [ConversoesComponent],
  imports: [
    FormsModule,
    ConversoesRoutingModule,
    CommonModule
  ],
  exports: [ConversoesComponent],
  providers: [
  ]
})
export class ConversoesModule { }

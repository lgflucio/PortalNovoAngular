import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { NfsesRoutingModule } from './nfses-routing.module';
import { NfsesComponent } from './nfses.component';

@NgModule({
  declarations: [NfsesComponent],
  imports: [
    FormsModule,
    NfsesRoutingModule,
    CommonModule
  ],
  exports: [NfsesComponent],
  providers: [
  ]
})
export class NfsesModule { }

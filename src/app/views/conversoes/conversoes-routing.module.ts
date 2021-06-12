import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConversoesComponent } from './conversoes.component';

const routes: Routes = [
  {
    path: '',
    component: ConversoesComponent,
    data: {
      title: 'Conversões'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConversoesRoutingModule {}

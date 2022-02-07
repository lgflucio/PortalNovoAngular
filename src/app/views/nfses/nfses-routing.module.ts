import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ButtonsComponent } from '../buttons/buttons.component';
import { NfsesComponent } from './nfses.component';


const routes: Routes = [
  {
    path: '',
    component: NfsesComponent,
    data: {
      title: 'Notas de Serviço'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NfsesRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeventasComponent } from './componentes/homeventas/homeventas.component';
import { ClientesComponent } from './componentes/clientes/clientes.component';
import { BoletasComponent } from './componentes/boletas/boletas.component';
import { RegistroComponent } from '../shared/login/registro.component';


const routes: Routes = [
  {
    path: '', component: HomeventasComponent,
    children: [
      { path: 'clientes', component: ClientesComponent },
      { path: 'boletas', component: BoletasComponent },

    ]
  },




];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VentasRoutingModule { }

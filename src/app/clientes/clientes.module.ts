import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientesRoutingModule } from './clientes-routing.module';

import { AgregarComponent } from './pages/agregar/agregar.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { ClienteComponent } from './pages/cliente/cliente.component';
import { HomeComponent } from './pages/home/home.component';
import { ListadoComponent } from './pages/listado/listado.component';




@NgModule({
  declarations: [
    AgregarComponent,
    BuscarComponent,
    ClienteComponent,
    HomeComponent,
    ListadoComponent
  ],
  imports: [
    CommonModule,
    ClientesRoutingModule
  ], 
  exports: [ListadoComponent]
})
export class ClientesModule { }

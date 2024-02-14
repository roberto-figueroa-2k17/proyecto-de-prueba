import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PreinventariosRoutingModule } from './preinventarios-routing.module';
import { PreinventariosHomeComponent } from './preinventarios-home/preinventarios-home.component';
import { PreinventariosTicketComponent } from './preinventarios-ticket/preinventarios-ticket.component';
import { PreinventariosReportesComponent } from './preinventarios-reportes/preinventarios-reportes.component';
import { PreinventariosGraficasComponent } from './preinventarios-graficas/preinventarios-graficas.component';

@NgModule({
  declarations: [
    PreinventariosHomeComponent,
    PreinventariosTicketComponent,
    PreinventariosReportesComponent,
    PreinventariosGraficasComponent
  ],
  imports: [
    CommonModule,
    PreinventariosRoutingModule
  ]
})
export class PreinventariosModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DirectosRoutingModule } from './directos-routing.module';
import { DirectosHomeComponent } from './directos-home/directos-home.component';
import { DirectosComprobantesDeCompraComponent } from './directos-comprobantes-de-compra/directos-comprobantes-de-compra.component';
import { DirectosReportesComponent } from './directos-reportes/directos-reportes.component';
import { DirectosGraficasComponent } from './directos-graficas/directos-graficas.component';

@NgModule({
  declarations: [
    DirectosHomeComponent,
    DirectosComprobantesDeCompraComponent,
    DirectosReportesComponent,
    DirectosGraficasComponent
  ],
  imports: [
    CommonModule,
    DirectosRoutingModule
  ]
})
export class DirectosModule { }

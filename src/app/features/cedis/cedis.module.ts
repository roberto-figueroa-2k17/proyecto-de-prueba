import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CedisRoutingModule } from './cedis-routing.module';
import { CedisHomeComponent } from './cedis-home/cedis-home.component';
import { CedisRecepcionDeTransferenciasYDevolucionesComponent } from './cedis-recepcion-de-transferencias-y-devoluciones/cedis-recepcion-de-transferencias-y-devoluciones.component';
import { CedisReportesComponent } from './cedis-reportes/cedis-reportes.component';
import { CedisGraficasComponent } from './cedis-graficas/cedis-graficas.component';

@NgModule({
    declarations: [
        CedisHomeComponent,
        CedisRecepcionDeTransferenciasYDevolucionesComponent,
        CedisReportesComponent,
        CedisGraficasComponent
    ],
    imports: [
        CommonModule,
        CedisRoutingModule
    ]
})

export class CedisModule { }

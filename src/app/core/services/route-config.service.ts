import { Injectable } from '@angular/core';
import { Router, Routes, Route } from '@angular/router';

import { HomeComponent } from '../../features/main/home/home.component';
import { FaqsComponent } from '../../features/main/faqs/faqs.component';
import { PerfilesComponent } from '../../features/main/perfiles/perfiles.component';
import { CedisHomeComponent } from '../../features/cedis/cedis-home/cedis-home.component';
import { CedisRecepcionDeTransferenciasYDevolucionesComponent } from '../../features/cedis/cedis-recepcion-de-transferencias-y-devoluciones/cedis-recepcion-de-transferencias-y-devoluciones.component';
import { CedisReportesComponent } from '../../features/cedis/cedis-reportes/cedis-reportes.component';
import { CedisGraficasComponent } from '../../features/cedis/cedis-graficas/cedis-graficas.component';
import { DirectosHomeComponent } from '../../features/directos/directos-home/directos-home.component';
import { DirectosComprobantesDeCompraComponent } from '../../features/directos/directos-comprobantes-de-compra/directos-comprobantes-de-compra.component';
import { DirectosReportesComponent } from '../../features/directos/directos-reportes/directos-reportes.component';
import { DirectosGraficasComponent } from '../../features/directos/directos-graficas/directos-graficas.component';
import { PreinventariosHomeComponent } from '../../features/preinventarios/preinventarios-home/preinventarios-home.component';
import { PreinventariosTicketComponent } from '../../features/preinventarios/preinventarios-ticket/preinventarios-ticket.component';
import { PreinventariosReportesComponent } from '../../features/preinventarios/preinventarios-reportes/preinventarios-reportes.component';
import { PreinventariosGraficasComponent } from '../../features/preinventarios/preinventarios-graficas/preinventarios-graficas.component';

import { AuthGuard } from '../guards/auth.guard';

interface RouteItem {
    serviceUrl: string;
    serviceName: string;
    submenus?: RouteItem[];
}

@Injectable({
    providedIn: 'root'
})

export class RouteConfigService {
    private componentMap: Record<string, any> = {
        'home': HomeComponent,
        'cedis/home': CedisHomeComponent,
        'cedis/recepcion-de-transferencias-y-devoluciones': CedisRecepcionDeTransferenciasYDevolucionesComponent,
        'cedis/reportes': CedisReportesComponent,
        'cedis/graficas': CedisGraficasComponent,
        'directos/home': DirectosHomeComponent,
        'directos/comprobantes-de-compra': DirectosComprobantesDeCompraComponent,
        'directos/reportes': DirectosReportesComponent,
        'directos/graficas': DirectosGraficasComponent,
        'preinventarios/home': PreinventariosHomeComponent,
        'preinventarios/ticket': PreinventariosTicketComponent,
        'preinventarios/reportes': PreinventariosReportesComponent,
        'preinventarios/graficas': PreinventariosGraficasComponent,
        'faqs': FaqsComponent,
        'perfiles': PerfilesComponent
    };

    constructor(private router: Router) {}

    public configureRoutes(appRoutes: RouteItem[]): void {
        const routes: Routes = this.buildRoutes(appRoutes);
        this.router.resetConfig(routes);
    }

    private buildRoutes(appRoutes: RouteItem[]): Routes {
        const newRoutes: Routes = [];

        appRoutes.forEach(item => {
            if (this.isValidRouteConfig(item)) {
                const route = this.createRoute(item);
                if (route) {
                    newRoutes.push(route);
                    if (item.submenus && item.submenus.length > 0) {
                        item.submenus.forEach((subItem: RouteItem) => {
                            if (this.isValidRouteConfig(subItem)) {
                                const childRoute = this.createRoute(subItem);
                                if (childRoute) {
                                    newRoutes.push(childRoute);
                                }
                            }
                        });
                    }
                }
            }
        });

        return newRoutes;
    }

    private isValidRouteConfig(item: RouteItem): boolean {
        return !!item && !!item.serviceName && !!item.serviceUrl;
    }

    private createRoute(item: RouteItem): Route | null {
        const path = this.getPathFromItem(item);
        const component = this.getComponentForPath(path);
        return component ? { path, component, canActivate: [AuthGuard] } : null;
    }

    private getPathFromItem(item: RouteItem): string {
        return item.serviceUrl.replace(/^\/PortalCometa\//, '');
    }

    private getComponentForPath(path: string): any {
        return this.componentMap[path];
    }
}

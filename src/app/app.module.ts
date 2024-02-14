import { BrowserModule } from '@angular/platform-browser';
import { NgModule, isDevMode, APP_INITIALIZER } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { AppInitService } from './core/services/app-init.service';
import { MainModule } from './features/main/main.module';
import { CedisModule } from './features/cedis/cedis.module';
import { DirectosModule } from './features/directos/directos.module';
import { PreinventariosModule } from './features/preinventarios/preinventarios.module';

export function initializeApp(appInitService: AppInitService) {
    return (): Promise<any> => {
        return appInitService.initApp();
    }
}

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        StoreModule.forRoot({}, {}),
        StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
        EffectsModule.forRoot([]),
        CoreModule,
        SharedModule,
        HttpClientModule,
        MainModule,
        CedisModule,
        DirectosModule,
        PreinventariosModule
    ],
    providers: [
        {
            provide: APP_INITIALIZER,
            useFactory: initializeApp,
            deps: [AppInitService],
            multi: true
        }
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }

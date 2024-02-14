import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { RouteConfigService } from '../services/route-config.service';
import { AppStateService } from '../services/app-state.service';
import { environment } from '../../../environments/environment.dev';

@Injectable({
    providedIn: 'root'
})

export class AppInitService {
    private static isInitialized = false;

    constructor(
        private apiService: ApiService,
        private router: Router,
        private routeConfigService: RouteConfigService,
        private appStateService: AppStateService
    ) {}

    initApp(): Promise<void> {
        if (AppInitService.isInitialized) {
            return Promise.resolve();
        }

        const { appId, encrypt, token } = this.getAuthParamsFromUrl();

        if (appId && encrypt && token) {
            return this.validateAndInit(appId, encrypt, token);
        } else if (this.hasSessionStorageValues()) {
            const storedAppId = sessionStorage.getItem('appId') || '';
            const storedEncrypt = sessionStorage.getItem('encrypt') || '';
            const storedToken = sessionStorage.getItem('token') || '';
            return this.validateAndInit(storedAppId, storedEncrypt, storedToken);
        } else {
            return this.redirectToLogin(environment.acLogin);
        }
    }

    private getAuthParamsFromUrl(): { appId: string, encrypt: string, token: string } {
        const url = new URL(window.location.href);
        return {
            appId: url.searchParams.get('appId') || '',
            encrypt: url.searchParams.get('encrypt') || '',
            token: url.searchParams.get('token') || ''
        };
    }

    private hasSessionStorageValues(): boolean {
        return !!(sessionStorage.getItem('appId') && sessionStorage.getItem('encrypt') && sessionStorage.getItem('token'));
    }

    private validateAndInit(appId: string, encrypt: string, token: string): Promise<void> {
        return this.validateAuthParams(token)
            .then(response => {
                const isValidToken = response.isValidToken;
                this.storeAuthParams(appId, encrypt, token, isValidToken);
                AppInitService.isInitialized = true;

                if (response.menus?.length > 0) {
                    this.routeConfigService.configureRoutes(response.menus);
                    this.appStateService.setAccessTo(response.menus);
                    this.appStateService.setUserName(response.user.userName);
                    this.router.navigate(['/home']);
                } else {
                    // this.router.navigate(['/error']);
                    console.log('Access denied');
                }
            })
            .catch(error => {
                sessionStorage.clear();
                return this.redirectToLogin(environment.acLogin);
            });
    }

    private validateAuthParams(token: string): Promise<any> {
        return new Promise((resolve, reject) => {
            this.apiService.getUserInformation()
                .subscribe({
                    next: (response) => {
                        if (response && response.isValidToken === true) {
                            resolve(response);
                        } else {
                            reject(new Error('Initialization failed due to an invalid token.'));
                        }
                    },
                    error: (error) => reject(error)
                });
        });
    }

    private storeAuthParams(appId: string, encrypt: string, token: string, isValidToken: string): void {
        sessionStorage.setItem('appId', appId);
        sessionStorage.setItem('encrypt', encrypt);
        sessionStorage.setItem('token', token);
        sessionStorage.setItem('isValidToken', isValidToken);
    }

    private redirectToLogin(url: string): Promise<never> {
        window.location.href = url;
        return Promise.reject(new Error('Initialization failed due to missing authentication parameters.'));
    }
}

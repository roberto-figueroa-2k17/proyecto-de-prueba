import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { environment } from '../../../environments/environment.dev';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {
    constructor(private router: Router) {}

    canActivate(): boolean {
        const hasSession = !!(sessionStorage.getItem('appId') && sessionStorage.getItem('encrypt') && sessionStorage.getItem('token'));

        if (!hasSession) {
            window.location.href = environment.acLogin;
            return false;
        }

        return true;
    }
}

import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class AppStateService {
    private userName: string = '';
    private accessTo: any[] = [];

    constructor() {}

    setUserName(userName: string): void {
        this.userName = userName;
    }

    getUserName(): string {
        return this.userName;
    }

    setAccessTo(accessTo: any[]): void {
        this.accessTo = accessTo;
    }

    getAccessTo(): any[] {
        return this.accessTo;
    }
}

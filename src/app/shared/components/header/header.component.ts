import { Component } from '@angular/core';
import { AppStateService } from '../../../core/services/app-state.service';
import { environment } from '../../../../environments/environment.dev';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})

export class HeaderComponent {
    userName: string = '';
    accessTo: any[] = [];

    constructor(private appStateService: AppStateService) {
        this.userName = this.appStateService.getUserName();
        this.accessTo = this.appStateService.getAccessTo();
    }

    logout(event: Event) {
        event.preventDefault();
        sessionStorage.clear();
        window.location.href = environment.acLogout;
    }
}

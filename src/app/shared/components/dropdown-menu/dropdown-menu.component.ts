import { Component, Input, OnInit } from '@angular/core';

interface MenuItem {
    profileId: number;
    serviceUrl?: string;
    serviceName?: string;
    submenus?: SubMenuItem[];
}

interface SubMenuItem {
    serviceUrl?: string;
    serviceName?: string;
}

@Component({
    selector: 'app-dropdown-menu',
    templateUrl: './dropdown-menu.component.html',
    styleUrls: ['./dropdown-menu.component.css']
})

export class DropdownMenuComponent implements OnInit {
    @Input() menuItems: MenuItem[] = [];

    constructor() { }

    ngOnInit(): void {
        this.menuItems.sort((a, b) => a.profileId - b.profileId);

        this.menuItems = this.menuItems.map(item => {
            if (item.serviceUrl) {
                item.serviceUrl = this.cleanNavigationUrl(item.serviceUrl);
            }

            if (item.submenus) {
                item.submenus = item.submenus.map(subItem => {
                    if (subItem.serviceUrl) {
                        subItem.serviceUrl = this.cleanNavigationUrl(subItem.serviceUrl);
                    }

                    return subItem;
                });
            }

            return item;
        });
    }

    private cleanNavigationUrl(url: string): string {
        return url.replace(/^\/PortalCometa\//, '');
    }
}

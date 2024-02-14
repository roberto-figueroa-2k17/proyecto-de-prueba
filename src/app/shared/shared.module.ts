import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { HeaderComponent } from './components/header/header.component';
import { DropdownMenuComponent } from './components/dropdown-menu/dropdown-menu.component';

@NgModule({
    declarations: [
        HeaderComponent,
        DropdownMenuComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        MatIconModule
    ],
    exports: [
        HeaderComponent
    ]
})

export class SharedModule { }

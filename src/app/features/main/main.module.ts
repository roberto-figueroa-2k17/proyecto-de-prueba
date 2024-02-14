import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { HomeComponent } from './home/home.component';
import { FaqsComponent } from './faqs/faqs.component';
import { PerfilesComponent } from './perfiles/perfiles.component';

@NgModule({
  declarations: [
    HomeComponent,
    FaqsComponent,
    PerfilesComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule { }

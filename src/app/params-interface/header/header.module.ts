import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderRoutingModule } from './header-routing.module';
import { InfoGComponent } from './info-g/info-g.component';
import { GestionAccComponent } from './gestion-acc/gestion-acc.component';


@NgModule({
  declarations: [InfoGComponent, GestionAccComponent],
  imports: [
    CommonModule,
    HeaderRoutingModule
  ],
  exports: []
})
export class HeaderModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParamsInterfaceRoutingModule } from './params-interface-routing.module';
import { HomeComponent } from './home/home.component';
import { SidNumListComponent } from './sid-num-list/sid-num-list.component';
import { BodyParamsComponent } from './body-params/body-params.component';
import { HeaderParamsComponent } from './header-params/header-params.component';
import { PlacholderComponent } from './placholder/placholder.component';


@NgModule({
  declarations: [HomeComponent, SidNumListComponent, BodyParamsComponent, HeaderParamsComponent, PlacholderComponent],
  imports: [
    CommonModule,
    ParamsInterfaceRoutingModule
  ],

})
export class ParamsInterfaceModule { }

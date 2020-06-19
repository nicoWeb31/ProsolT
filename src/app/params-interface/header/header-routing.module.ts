import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GestionAccComponent }from './gestion-acc/gestion-acc.component';
import { InfoGComponent }from './info-g/info-g.component';


const routes: Routes = [
  {path:'', component:InfoGComponent},
  {path:'gestion', component:GestionAccComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeaderRoutingModule { }

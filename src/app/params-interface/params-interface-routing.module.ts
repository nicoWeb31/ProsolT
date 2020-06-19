import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PlacholderComponent } from './placholder/placholder.component';
import { BodyParamsComponent } from './body-params/body-params.component';
import { HeaderParamsComponent } from './header-params/header-params.component';
import { NotFoundComponent } from '../not-found/not-found.component';


const routes: Routes = [
  {path:'', component:HomeComponent,children:[

    {path:':id',component:BodyParamsComponent},
    {path:'', component:PlacholderComponent}

    
  ]}
]; 



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParamsInterfaceRoutingModule { }

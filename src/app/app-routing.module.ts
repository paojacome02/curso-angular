import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandComponent } from './brand/brand.component';
import { ComputersComponent } from './computers/computers.component';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path:'brand',
    component:BrandComponent
  },
  {
    path:'brand/:id',
    component:BrandComponent
  },
  {
    path:'computers',
    component:ComputersComponent
  },
  {
    path:'computers/:id',
    component:ComputersComponent
  },
  {
    path: 'list',
    component: ListComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

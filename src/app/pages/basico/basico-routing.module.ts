import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { Reto1Component } from './reto1/reto1.component';
import { Reto2Component } from './reto2/reto2.component';
import { Reto3Component } from './reto3/reto3.component';
import { Reto4Component } from './reto4/reto4.component';
import { Reto5Component } from './reto5/reto5.component';
import { Reto6Component } from './reto6/reto6.component';

const routes: Routes = [
  {
    path: 'reto1',
    component: Reto1Component,
    pathMatch: 'full',
  },
  {
    path: 'reto2',
    component: Reto2Component,
    pathMatch: 'full',
  },
  {
    path: 'reto3',
    component: Reto3Component,
    pathMatch: 'full',
  },
  {
    path: 'reto4',
    component: Reto4Component,
    pathMatch: 'full',
  },
  {
    path: 'reto5',
    component: Reto5Component,
    pathMatch: 'full',
  },
  {
    path: 'reto6',
    component: Reto6Component,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BasicoRoutingModule {}

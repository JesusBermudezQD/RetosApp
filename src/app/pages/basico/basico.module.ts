import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicoRoutingModule } from './basico-routing.module';
import { Reto2Component } from './reto2/reto2.component';
import { Reto1Component } from './reto1/reto1.component';
import { Reto3Component } from './reto3/reto3.component';
import { CardComponent } from './reto3/component/card/card.component';
import { Reto4Component } from './reto4/reto4.component';
import { Reto5Component } from './reto5/reto5.component';
import { Reto6Component } from './reto6/reto6.component';
import { Card6Component } from './reto6/component/card6/card6.component';



@NgModule({
  declarations: [
    Reto1Component,
    Reto2Component,
    Reto3Component,
    CardComponent,
    Reto4Component,
    Reto5Component,
    Reto6Component,
    Card6Component
  ],
  imports: [
    CommonModule,
    BasicoRoutingModule
  ]
})
export class BasicoModule { }

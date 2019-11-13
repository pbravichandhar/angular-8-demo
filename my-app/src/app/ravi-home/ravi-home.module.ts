import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RaviHomeRoutingModule } from './ravi-home-routing.module';
import { RaviHomeComponent } from './ravi-home.component';


@NgModule({
  declarations: [RaviHomeComponent],
  imports: [
    CommonModule,
    RaviHomeRoutingModule
  ]
})
export class RaviHomeModule { }

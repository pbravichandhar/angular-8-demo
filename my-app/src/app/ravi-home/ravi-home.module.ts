import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RaviHomeRoutingModule } from './ravi-home-routing.module';
import { RaviHomeComponent } from './ravi-home.component';
import { ChildComponent } from './child/child.component';


@NgModule({
  declarations: [RaviHomeComponent, ChildComponent],
  imports: [
    CommonModule,
    RaviHomeRoutingModule
  ]
})
export class RaviHomeModule { }

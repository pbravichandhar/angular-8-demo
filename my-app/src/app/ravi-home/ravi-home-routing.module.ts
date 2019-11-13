import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RaviHomeComponent } from './ravi-home.component';

const routes: Routes = [
  {
    path: '',
    component: RaviHomeComponent,
    children: []
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RaviHomeRoutingModule { }

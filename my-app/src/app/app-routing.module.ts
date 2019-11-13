import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('../app/home/home.module').then(m => m.HomeModule),
  },
  {
    path: 'ravi-home',
    loadChildren: () => import('../app/ravi-home/ravi-home.module').then(m => m.RaviHomeModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

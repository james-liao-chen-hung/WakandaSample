import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { appPath } from './app-path.const';

const routes: Routes = [
  {
    path: appPath.home,
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path: appPath.safty,
    loadChildren: () => import('./safty/safty.module').then(m => m.SaftyModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

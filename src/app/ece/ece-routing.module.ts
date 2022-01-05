import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ECEPage } from './ece.page';

const routes: Routes = [
  {
    path: '',
    component: ECEPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ECEPageRoutingModule {}

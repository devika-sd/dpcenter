import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EEEPage } from './eee.page';

const routes: Routes = [
  {
    path: '',
    component: EEEPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EEEPageRoutingModule {}

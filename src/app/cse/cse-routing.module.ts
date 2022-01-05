import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CSEPage } from './cse.page';

const routes: Routes = [
  {
    path: '',
    component: CSEPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CSEPageRoutingModule {}

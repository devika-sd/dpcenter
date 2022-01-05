import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BecivilComponent } from './becivil/becivil.component';

import { CivilPage } from './civil.page';
import { DiplamocivilComponent } from './diplamocivil/diplamocivil.component';
import { MatlabComponent } from './matlab/matlab.component';
import { MecivilComponent } from './mecivil/mecivil.component';

const routes: Routes = [
  {
    path: '',
    component: CivilPage
  },
  {
    path:'beProject',
    component:BecivilComponent
  },
  {
    path:'meProject',
    component:MecivilComponent
  },
  {
    path:'matlabProject',
    component:MatlabComponent
  },
  {
    path:'diplomaProject',
    component:DiplamocivilComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CivilPageRoutingModule {}

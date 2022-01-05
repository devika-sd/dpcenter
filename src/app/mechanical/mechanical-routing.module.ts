import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EnquiryComponent } from '../enquiry/enquiry.component';
import { ProjectListComponent } from '../project-list/project-list.component';
import { BeMechComponent } from './be-mech/be-mech.component';
import { DiplomaMechComponent } from './diploma-mech/diploma-mech.component';
import { MeMechComponent } from './me-mech/me-mech.component';

import { MechanicalPage } from './mechanical.page';
import { MiniProjectComponent } from './mini-project/mini-project.component';

const routes: Routes = [
  {
    path: '',
    component: MechanicalPage
  },
  {
    path:'beProject',
    component:BeMechComponent
  },
  {
    path:'meProject',
    component:MeMechComponent
  },
  {
    path:'miniProject',
    component:MiniProjectComponent
  },
  {
    path:'diplomaProject',
    component:DiplomaMechComponent
  },
  {
    path:'projectList',
    component:ProjectListComponent
  },
  {
    path:'enquiry',
    component:EnquiryComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MechanicalPageRoutingModule {}

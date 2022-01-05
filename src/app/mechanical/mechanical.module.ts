import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MechanicalPageRoutingModule } from './mechanical-routing.module';

import { MechanicalPage } from './mechanical.page';
import { BeMechComponent } from './be-mech/be-mech.component';
import { MeMechComponent } from './me-mech/me-mech.component';
import { DiplomaMechComponent } from './diploma-mech/diploma-mech.component';
import { MiniProjectComponent } from './mini-project/mini-project.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MechanicalPageRoutingModule
  ],
  declarations: [MechanicalPage,BeMechComponent,MeMechComponent,DiplomaMechComponent,MiniProjectComponent]
})
export class MechanicalPageModule {}

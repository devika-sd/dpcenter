import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CivilPageRoutingModule } from './civil-routing.module';

import { CivilPage } from './civil.page';
import { BecivilComponent } from './becivil/becivil.component';
import { MecivilComponent } from './mecivil/mecivil.component';
import { DiplamocivilComponent } from './diplamocivil/diplamocivil.component';
import { MatlabComponent } from './matlab/matlab.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CivilPageRoutingModule
  ],
  declarations: [CivilPage,BecivilComponent,MecivilComponent,DiplamocivilComponent,MatlabComponent]
})
export class CivilPageModule {}

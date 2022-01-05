import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EEEPageRoutingModule } from './eee-routing.module';

import { EEEPage } from './eee.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EEEPageRoutingModule
  ],
  declarations: [EEEPage]
})
export class EEEPageModule {}

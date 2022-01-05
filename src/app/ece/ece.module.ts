import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ECEPageRoutingModule } from './ece-routing.module';

import { ECEPage } from './ece.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ECEPageRoutingModule
  ],
  declarations: [ECEPage]
})
export class ECEPageModule {}

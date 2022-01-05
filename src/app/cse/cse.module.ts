import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CSEPageRoutingModule } from './cse-routing.module';

import { CSEPage } from './cse.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CSEPageRoutingModule
  ],
  declarations: [CSEPage]
})
export class CSEPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SuggestionPagePageRoutingModule } from './suggestion-page-routing.module';

import { SuggestionPagePage } from './suggestion-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SuggestionPagePageRoutingModule
  ],
  declarations: [SuggestionPagePage]
})
export class SuggestionPagePageModule {}

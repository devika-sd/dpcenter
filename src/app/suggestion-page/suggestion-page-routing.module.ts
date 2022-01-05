import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SuggestionPagePage } from './suggestion-page.page';

const routes: Routes = [
  {
    path: '',
    component: SuggestionPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SuggestionPagePageRoutingModule {}

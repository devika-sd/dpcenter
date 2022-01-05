import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'mechanical',
    loadChildren: () => import('./mechanical/mechanical.module').then( m => m.MechanicalPageModule)
  },
  {
    path: 'civil',
    loadChildren: () => import('./civil/civil.module').then( m => m.CivilPageModule)
  },
  {
    path: 'cse',
    loadChildren: () => import('./cse/cse.module').then( m => m.CSEPageModule)
  },
  {
    path: 'eee',
    loadChildren: () => import('./eee/eee.module').then( m => m.EEEPageModule)
  },
  {
    path: 'ece',
    loadChildren: () => import('./ece/ece.module').then( m => m.ECEPageModule)
  },
  {
    path: 'management',
    loadChildren: () => import('./management/management.module').then( m => m.ManagementPageModule)
  },
  {
    path: 'suggestion-page',
    loadChildren: () => import('./suggestion-page/suggestion-page.module').then( m => m.SuggestionPagePageModule)
  },
  {
    path:'contact',
    component:ContactComponent
  },
  {
    path:'about',
    component:AboutComponent
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SectionDetailComponent }  from './section-detail.component';

const heroesRoutes: Routes = [
  { path: 'section/:id', component: SectionDetailComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(heroesRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AdminRoutingModule { }
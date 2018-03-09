import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { examinationRoutes } from './examination/examination.routes'
import { NotFoundComponent } from './not-found.component'

// Route Configuration
export const routes: Routes = [
 // { path: '',component: HomeComponent },
 // { path: 'profile',component: ProfileComponent },
 // { path: 'assessments',component: AssessmentsComponent },
 // { path: 'assessments/:id',component: AssessmentsComponent },
 // { path: 'login',component: LoginComponent },
  ...examinationRoutes,
  { path: '**',component: NotFoundComponent }
  
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
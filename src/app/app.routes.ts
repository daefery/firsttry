import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { examinationRoutes } from './examination/examination.routes'
import { NotFoundComponent } from './error-page/404.component'
import { ForbiddenComponent } from './error-page/403.component'

// Route Configuration
export const routes: Routes = [
 // { path: '',component: HomeComponent },
 // { path: 'profile',component: ProfileComponent },
 // { path: 'assessments',component: AssessmentsComponent },
 // { path: 'assessments/:id',component: AssessmentsComponent },
 // { path: 'login',component: LoginComponent },
  ...examinationRoutes,
  { path: 'forbidden',component: ForbiddenComponent },
  { path: '**',component: NotFoundComponent }
  
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//component
import { HomeComponent } from '@comp/home/home.component';
import { ProfileComponent } from '@comp/profile/profile.component';
import { LoginComponent } from '@comp/login/login.component';
import { PageNotFoundComponent } from '@com/page-not-found/page-not-found.component';
import { AssessmentsComponent } from '@comp/assessments/assessments.component';

import { AdminComponent }    from '@comp/admin/admin.component';

//route
 import { adminRoutes } from '@comp/admin/admin.routes'

// Route Configuration
export const routes: Routes = [
  { path: '',component: HomeComponent },
  { path: 'profile',component: ProfileComponent },
  { path: 'assessments',component: AssessmentsComponent },
  { path: 'assessments/:id',component: AssessmentsComponent },
  { path: 'login',component: LoginComponent },
  ...adminRoutes,
  { path: '**',component: PageNotFoundComponent },
  
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
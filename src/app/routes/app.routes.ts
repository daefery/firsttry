import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from '@comp/home/home.component';
import { ProfileComponent } from '@comp/profile/profile.component';
import { LoginComponent } from '@comp/login/login.component';
import { PageNotFoundComponent } from '@comp/page-not-found/page-not-found.component';
import { AssessmentsComponent } from '@comp/assessments/assessments.component';

const appRoutes : Routes =
  [
    { path: '',component: HomeComponent },
    { path: 'profile',component: ProfileComponent },
    { path: 'assessments',component: AssessmentsComponent },
    { path: 'assessments/:id',component: AssessmentsComponent },
    { path: 'login',component: LoginComponent },
    { path: '**',component: PageNotFoundComponent }
  ];
 
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
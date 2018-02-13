import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//import { catRoutes }    from './cats/cat.routes';
import { HomeComponent } from '../components/home/home.component';
import { ProfileComponent } from '../components/profile/profile.component';
import { LoginComponent } from '../components/login/login.component';
import { AssessmentsComponent } from '../components/assessments/assessments.component';

const appRoutes : Routes =
  [
    { path: '',component: HomeComponent },
    { path: 'profile',component: ProfileComponent },
    { path: 'assessments',component: AssessmentsComponent },
    { path: 'login',component: LoginComponent }
  ];
 
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
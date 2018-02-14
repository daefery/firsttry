import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent }         from './app.component';

//custom component
import { NavigationComponent } from '@comp/navigation/navigation.component';
import { FooterComponent } from '@comp/footer/footer.component';
import { HomeComponent } from '@comp/home/home.component';
import { ProfileComponent } from '@comp/profile/profile.component';
import { LoginComponent } from '@comp/login/login.component';
import { AssessmentsComponent } from '@comp/assessments/assessments.component';
import { PageNotFoundComponent } from '@comp/page-not-found/page-not-found.component';

//custom service
import { AssessmentsService } from '@serv/assessments/assessments.service';

//custom route
import { routing } from '@route/app.routes';

//custom directive
import { AssessmentDirective } from '@dirv/assessments/assessment.directive';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FooterComponent,
    HomeComponent,
    ProfileComponent,
    LoginComponent,
    AssessmentsComponent,
    PageNotFoundComponent,
    AssessmentDirective
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [AssessmentsService],
  bootstrap: [AppComponent, NavigationComponent, FooterComponent]
})
export class AppModule { }

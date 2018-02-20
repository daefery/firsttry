import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent }         from './app.component';

//custom component
import { NavigationComponent } from '@com/navigation/navigation.component';
import { FooterComponent } from '@com/footer/footer.component';
import { HomeComponent } from '@comp/home/home.component';
import { ProfileComponent } from '@comp/profile/profile.component';
import { LoginComponent } from '@comp/login/login.component';
import { AssessmentsComponent } from '@comp/assessments/assessments.component';
import { PageNotFoundComponent } from '@com/page-not-found/page-not-found.component';
import { AdminComponent } from '@comp/admin/admin.component';

//custom service
import { AssessmentsService } from '@comp/assessments/assessments.service';
import { AdminService } from '@comp/admin/admin.service';

//custom route
import { routing } from './app.routes';

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
    AdminComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    routing
  ],
  providers: [AssessmentsService, AdminService],
  bootstrap: [AppComponent, NavigationComponent, FooterComponent]
})
export class AppModule { }

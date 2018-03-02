import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent }         from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//custom component
import { NavigationComponent } from '@com/navigation/navigation.component';
import { FooterComponent } from '@com/footer/footer.component';
import { HomeComponent } from '@comp/home/home.component';
import { ProfileComponent } from '@comp/profile/profile.component';
import { LoginComponent } from '@comp/login/login.component';
import { AssessmentsComponent } from '@comp/assessments/assessments.component';
import { PageNotFoundComponent } from '@com/page-not-found/page-not-found.component';

//custom service
import { AssessmentsService } from '@comp/assessments/assessments.service';

//main route
import { routing } from './app.routes';

//modules
import { AdminModule } from '@comp/admin/admin.module';
import { TestModule } from './test/test.module';
import { DynamicFormModule } from '@com/dynamic-form/dynamic-form.module';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FooterComponent,
    HomeComponent,
    ProfileComponent,
    LoginComponent,
    AssessmentsComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AdminModule,
    TestModule,
    routing,
    DynamicFormModule
  ],
  providers: [AssessmentsService],
  bootstrap: [AppComponent, NavigationComponent, FooterComponent]
})
export class AppModule { }

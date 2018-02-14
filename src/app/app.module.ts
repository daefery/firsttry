import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent }         from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { routing } from './routes/app.routes';
import { LoginComponent } from './components/login/login.component';
import { AssessmentsComponent } from './components/assessments/assessments.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

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
    routing
  ],
  providers: [],
  bootstrap: [AppComponent, NavigationComponent, FooterComponent]
})
export class AppModule { }

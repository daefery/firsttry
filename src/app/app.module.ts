import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent }         from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ExaminationModule } from './examination/examination.module';
import { NotFoundComponent } from './error-page/404.component'
import { ForbiddenComponent } from './error-page/403.component'

//main route
import { routing } from './app.routes';

//modules
@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    ForbiddenComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    routing,
    ExaminationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

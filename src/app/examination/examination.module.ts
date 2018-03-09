import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Select2Module } from 'ng2-select2';
import { NgSelectModule } from '@ng-select/ng-select';

import { ExaminationComponent } from './examination.component';
import { DemographyComponent } from './demography/demography.component';
import { MainExaminationComponent } from './main-examination.component';
import { DemographyIntroComponent } from './demography/demography-intro.component'
import { InterestComponent } from './interest/interest.component';
import { InterestIntroComponent } from './interest/interest-intro.component'
import { CognitiveComponent } from './cognitive/cognitive.component';
import { CognitiveIntroComponent } from './cognitive/cognitive-intro.component';

import { DemographyService } from './demography/demography.service'
import { FormDataService } from './demography/form-data.service'
import { DemographyFormService } from './demography/demography-form.service'
import { InterestService } from './interest/interest.service';
import { CognitiveService } from './cognitive/cognitive.service';

@NgModule({
  declarations: [
    ExaminationComponent,
    DemographyComponent,
    MainExaminationComponent,
    DemographyIntroComponent,
    InterestComponent,
    InterestIntroComponent,
    CognitiveComponent,
    CognitiveIntroComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    Select2Module,
    NgSelectModule
  ],
  providers: [
    DemographyService, 
    FormDataService, 
    DemographyFormService,
    InterestService,
    CognitiveService
  ],
  bootstrap: []
})
export class ExaminationModule { }
import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './main/main.component';
import { BiodataComponent }    from './biodata/biodata.component';
import { CognitiveComponent }    from './cognitive/cognitive.component';
import { QuestionRenderComponent }    from './question-render.component';
import { TestFormComponent }    from './test-form.component';


@NgModule({
  declarations: [
    MainComponent,
    BiodataComponent,
    CognitiveComponent,
    QuestionRenderComponent,
    TestFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: []
})
export class TestModule { }

import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AdminComponent }    from './admin.component';
import { MainSectionComponent }    from './section/section.component';
import { SectionDetailComponent }    from './section/section-detail.component';

import { SectionService } from './section/section.service';
import { AdminGlobal } from './admin-global.service';


@NgModule({
  declarations: [
    AdminComponent,
    SectionDetailComponent,
    MainSectionComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule
  ],
  providers: [ SectionService, AdminGlobal ],
  bootstrap: []
})
export class AdminModule { }

import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AdminComponent } from '@comp/admin/admin.component';
import { SectionDetailComponent } from '@comp/admin/section-detail.component';
import { MainSectionComponent } from './section.component';
import { AdminService } from '@comp/admin/admin.service';
import { AdminRoutingModule } from './admin-routing.module';


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
    AdminRoutingModule
  ],
  providers: [ AdminService ],
  bootstrap: [ AdminComponent ]
})
export class AdminModule { }

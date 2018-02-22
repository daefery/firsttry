import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminGlobal } from './admin-global.service';

@Component({
  selector: 'my-app',
  template: `
  <div class="row container center" style="margin-top:20px">
    <a class="waves-effect waves-light btn" routerLink="section">Section</a>
    <a *ngIf="adminGlobal.isQuestionCreate" class="waves-effect waves-light btn" routerLink="/admin/question">Add Question</a>
    <a *ngIf="adminGlobal.isAnswerCreate" class="waves-effect waves-light btn" routerLink="/admin/answer">Add Answer</a>
  </div>
  <router-outlet></router-outlet>
  `
})
 
export class AdminComponent implements OnInit, OnDestroy { 
  constructor(private router:ActivatedRoute, private adminGlobal:AdminGlobal) { 
  }
  ngOnInit() {
    
  }

  ngOnDestroy() {
    this.adminGlobal.isQuestionCreate = false;
    this.adminGlobal.isAnswerCreate = false;
  }
}
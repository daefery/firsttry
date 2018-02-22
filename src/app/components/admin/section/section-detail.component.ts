import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SectionService } from './section.service'
import { Section } from './section.model'
import { AdminGlobal } from '../admin-global.service';
import { ISubscription } from "rxjs/Subscription";
import { NgForm, FormGroup } from '@angular/forms';

declare var $, Materialize, moment:any;
@Component({
	selector: 'section-detail',
	template: `
	<div class="row container">
        <div class="col s12 m6" *ngFor="let secdet of section_detail">
          <h5>Section Information</h5>
          <p>Name : <b>{{secdet.name}}</b></p>
          <p>Description : <b>{{secdet.description}}</b></p>
          <p>Has Generic Answer : <b>{{secdet.has_generic_answer}}</b></p>
          <p>Time Duration : <b>{{secdet.time_duration}}</b></p>
        </div>
        <div class="col s12 m6"></div>
        <div class="col s12 m6">
          <div class="card-panel red darken-2" *ngIf="!formValid && formSubmitted">
              <b class="white-text">Please complete the form.</b>
          </div>
          <form class="col s12" (ngSubmit)="onSubmit(questionForm)" #questionForm="ngForm" novalidate>
            <div class="row">
              <div class="input-field col s12">
                <input id="question_name" type="text" [(ngModel)]="m_qs.name" name="name" required>
                <label for="question_name">Question Name</label>
              </div>
            </div>
            <div class="row">
              <div class="input-field col s12">
                <input id="grade" name="grade" type="number"  [(ngModel)]="m_qs.grade" required>
                <label for="grade">Grade</label>
              </div>
            </div>
            <div class="row">
              <div class="input-field col 12 right">
                <button class="waves-effect waves-light btn" type="submit">Add Question</button>
              </div>
            </div>
          </form>

        </div>
        <div class="col s12 m12" *ngIf="isShowAnswerForm">
          <div class="card-panel red darken-2" *ngIf="!formValidAnswer && formSubmittedAnswer">
            <b class="white-text">Please complete the form.</b>
          </div>
          <form class="col s12" (ngSubmit)="onSubmitAnswer(answerForm)" #answerForm="ngForm" novalidate>
            <div class="row">
              <div class="input-field col s12">
                <input id="question_name" type="text" [(ngModel)]="m_answer.name" name="name" required>
                <label for="question_name">Answer Name</label>
              </div>
            </div>
            <div class="row">
              <div class="input-field col s12">
                <input id="grade" name="grade" type="text"  [(ngModel)]="m_answer.m_answer" required>
                <label for="grade">Value</label>
              </div>
            </div>
            <div class="row">
              <div class="input-field col 12 right">
                <button class="waves-effect waves-light btn" type="button" (click)="showAnswerForm(false)">Cancel</button>
                <button class="waves-effect waves-light btn" type="submit">Add Answer</button>
              </div>
            </div>
          </form>
        </div>
        
      	<table class="highlight">
        <thead>
          <tr>
              <th>Name</th>
              <th>Grade</th>
              <th>Action</th>
          </tr>
        </thead>

        <tbody>
          <tr *ngFor="let qs of questions; let i = index" style="">
            <td>{{qs.name}}</td>
            <td>{{qs.grade}}</td>
            <td>
            	<a class="waves-effect waves-light modal-trigger" href="#modal1"><i class="material-icons left">announcement</i></a>
              <a class="waves-effect waves-light red-text" (click)="onDelete(qs.id)"><i class="material-icons left">close</i></a>
            	<a *ngIf="section_detail[0].has_generic_answer != 'true'" class="waves-effect waves-light green-text" (click)="showAnswerForm(true)"><i class="material-icons left">chat</i></a>
            </td>
          </tr>
        </tbody>
      </table>
      </div>

      <div id="modal1" class="modal">
      <div class="modal-content">
      <table class="highlight">
        <thead>
          <tr>
              <th>Name</th>
              <th>Value</th>
              <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let qs of questions; let i = index" style="">
            <td>as</td>
            <td>as</td>
            <td>
              <a class="waves-effect waves-light" routerLink="{{qs.id}}"><i class="material-icons left">announcement</i></a>
              <a class="waves-effect waves-light red-text" (click)="onDelete(qs.id)"><i class="material-icons left">close</i></a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
	`
})
 
export class SectionDetailComponent implements OnInit, OnDestroy { 
  m_qs = [];
  m_answer = [];
  private subscription: ISubscription;
  private subscription2: ISubscription;
  questions;
	section_detail:Section;
  section_id:number;
  formValid = false;
  formSubmitted = false;
  formValidAnswer = false;
  formSubmittedAnswer = false;
  isShowAnswerForm = false;
  constructor(private router:ActivatedRoute, private sectionService:SectionService, private adminGlobal:AdminGlobal) { }
	
  ngOnInit() {
  	this.section_id = this.router.snapshot.params.id;
    this.subscription = this.sectionService.getSectionById(this.section_id).subscribe(res => {
      this.section_detail = res;
      console.log(this.section_detail[0]);
    });
    this.subscription2 = this.sectionService.getQuestionBySectionId(this.section_id).subscribe(res => {
      this.questions = res;
    });
	}

  onSubmit(questionForm: NgForm){
    Materialize.Toast.removeAll();
    this.formSubmitted = true;
    if(questionForm.valid){
      this.formValid = true;
      this.sectionService.addQuestion(questionForm.value, this.section_id).subscribe(res => {
        if(res['success']){
          this.m_qs = []
          Materialize.toast('New question created.', 4000);
          this.formSubmitted = false;

          this.subscription2 = this.sectionService.getQuestionBySectionId(this.section_id).subscribe(res => {
            this.questions = res;
          });
        }
      });
    }
  }

  showAnswerForm(type){
    this.m_answer = [];
    this.isShowAnswerForm = type;
  } 

  onSubmitAnswer(answerForm: NgForm){

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.subscription2.unsubscribe();
  }
}
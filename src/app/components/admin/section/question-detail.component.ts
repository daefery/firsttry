import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SectionService } from './section.service'
import { Section } from './section.model'
import { ISubscription } from "rxjs/Subscription";
import { NgForm, FormGroup } from '@angular/forms';

declare var $, Materialize, moment:any;
@Component({
	selector: 'question-detail',
	template: `
	<div class="row container">
        <div class="col s12 m6" *ngFor="let qs of question">
          <h5>Question Information</h5>
          <p>Name : <b>{{qs.name}}</b></p>
          <p>Grade : <b>{{qs.grade}}</b></p>
          <a class="waves-effect waves-light" routerLink="/admin/section/{{qs.section_id}}">Back to question</a>

        </div>
        <div class="col s12 m6">
          <div class="card-panel red darken-2" *ngIf="!formValid && formSubmitted">
              <b class="white-text">Please complete the form.</b>
          </div>
          <form class="col s12" (ngSubmit)="onSubmit(answerForm)" #answerForm="ngForm" novalidate>
            <input id="id" type="hidden" [(ngModel)]="m_answer.id" name="id">
            <div class="row">
              <div class="input-field col s12">
                <input id="question_name" type="text" [(ngModel)]="m_answer.name" name="name" required>
                <label for="question_name">Answer Name</label>
              </div>
            </div>
            <div class="row">
              <div class="input-field col s12">
                <input id="value" name="value" type="text"  [(ngModel)]="m_answer.value" required>
                <label for="value">Value</label>
              </div>
            </div>
            <div class="row">
              <div class="input-field col 12 right">
                <button class="waves-effect waves-light btn" type="submit">Add Answer</button>
              </div>
            </div>
          </form>
        </div>
      	<table class="highlight">
        <thead>
          <tr>
              <th>Name</th>
              <th>Value</th>
              <th>Action</th>
          </tr>
        </thead>

        <tbody>
          <tr *ngFor="let ans of answers; let i = index" style="">
            <td>{{ans.name}}</td>
            <td>{{ans.value}}</td>
            <td>
            	<a class="waves-effect waves-light" (click)="onAction(ans)"><i class="material-icons left">edit</i></a>
              <a class="waves-effect waves-light red-text" (click)="onDelete(ans.id)"><i class="material-icons left">close</i></a>
            </td>
          </tr>
        </tbody>
      </table>
      </div>
	`
})
 
export class QuestionDetailComponent implements OnInit, OnDestroy { 
  m_answer = [];
  private subscription: ISubscription;
  private subscription2: ISubscription;
  answers;
  question_id;
  question;
  formValid = false;
  formSubmitted = false;
  constructor(private router:ActivatedRoute, private sectionService:SectionService) { }
	
  ngOnInit() {
    this.question_id = this.router.snapshot.params.id;
    this.subscription = this.sectionService.getQuestionById(this.question_id).subscribe(res => {
      this.question = res;
      let resFirst = res[0];
      let dat = {
        section_id:resFirst.section_id,
        question_id:resFirst.id
      }

      this.subscription2 = this.sectionService.getAnswerByQuestionId(dat).subscribe(answerResponse => {
      console.log(answerResponse);
        this.answers = answerResponse;
      });
    });
	}

  onSubmit(answerForm: NgForm){
    console.log(this.formSubmitted);
    console.log(this.formValid);
    let dat = {
      section_id:this.question[0].section_id,
      question_id:this.question[0].id
    }
    Materialize.Toast.removeAll();
    this.formSubmitted = true;
    this.formValid = answerForm.valid;
    if(answerForm.valid){
      this.sectionService.addAnswer(answerForm.value, dat).subscribe(res => {
        if(res['success']){
          if(answerForm.value.id != null && answerForm.value.id != undefined && answerForm.value.id != ""){
            Materialize.toast('Answer updated.', 4000);
          }else{
            Materialize.toast('New answer created.', 4000);
          }
          this.m_answer = [];
          this.formSubmitted = false;
          this.subscription2 = this.sectionService.getAnswerByQuestionId(dat).subscribe(res => {
            this.answers = res;
          });
        }
      });
    }
  }

  onDelete(id){
    Materialize.Toast.removeAll();
    this.sectionService.deleteAnswer(id).subscribe(res => {
      if(res['success']){
        this.m_answer = []
        Materialize.toast('Answer deleted.', 4000);

        let dat = {
          section_id:this.question[0].section_id,
          question_id:this.question[0].id
        }
        this.subscription2 = this.sectionService.getAnswerByQuestionId(dat).subscribe(res => {
          this.answers = res;
        });

      }
    });
  }

  onAction(data){
    var label1 = $("label[for='question_name']");
    var label2 = $("label[for='value']");
    if (label1 && label2) {
      label1[0].classList.value = 'active';
      label2[0].classList.value = 'active';
    }
   this.m_answer.id = data.id;
   this.m_answer.name = data.name;
   this.m_answer.value = data.value;
  }

  ngOnDestroy() {
  }
}
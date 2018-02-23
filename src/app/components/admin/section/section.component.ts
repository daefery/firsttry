import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup } from '@angular/forms';

import { SectionService } from './section.service'
declare var $, Materialize, moment:any;

@Component({
	selector: 'main-section',
	template: `<div class="row container">
      <div class="col s12 m12">
        <div class="card-panel">
          <div class="row">
          	<h4>This is Admin Form</h4>
	      	<div class="card-panel red darken-2" *ngIf="!formValid && formSubmitted">
	      		<b class="white-text">Please complete the form.</b>
	      	</div>
		    <form class="col s12" (ngSubmit)="onSubmit(sectionForm)" #sectionForm="ngForm" novalidate>
          <input id="id" type="hidden" [(ngModel)]="sec.id" name="id">
		      <div class="row">
		        <div class="input-field col s12">
		          <input id="section_name" type="text" [(ngModel)]="sec.name" name="name" required>
		          <label for="section_name">Section Name</label>
		        </div>
		      </div>
		      <div class="row">
		        <div class="input-field col s12">
		          <textarea id="description" name="description" class="materialize-textarea" [(ngModel)]="sec.description" required></textarea>
		          <label for="description">Description</label>
		        </div>
		      </div>
		      <div class="row">
		      	<div class="input-field col s12">
		          <label for="hgaLabel">Has Generic Answer? {{has_generic_answer}}</label>
		        </div>
		      </div>
		      <div class="row">
		        <div class="col s6">
		        	<p>
				      <input name="has_generic_answer" type="radio" class="with-gap" id="hga1" [value]="true" [(ngModel)]="sec.has_generic_answer" required />
				      <label for="hga1">Yes</label>
				    </p>
		        </div>
		        <div class="col s6">
				    <p>
				      <input name="has_generic_answer" type="radio" class="with-gap" id="hga2" [value]="false" [(ngModel)]="sec.has_generic_answer" required/>
				      <label for="hga2">No</label>
				    </p>
		        </div>
		      </div>
		      <div class="row">
		        <div class="input-field col s12">
		          <input id="time_duration" name="time_duration" type="number"  [(ngModel)]="sec.time_duration" required>
		          <label for="time_duration">Time Duration(in minutes)</label>
		        </div>
		      </div>
		      <div class="row">
		      	<div class="input-field col 12 right">
		      		<button class="waves-effect waves-light btn" type="submit">Add Section</button>
		      	</div>
		      </div>
		    </form>
		  </div>
        </div>
      </div>

      <div class="row">
      	<table class="highlight">
        <thead>
          <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Has Generic Answer</th>
              <th>Time Duration</th>
              <th>Action</th>
          </tr>
        </thead>

        <tbody>
          <tr *ngFor="let sec of section_data; let i = index" style="">
            <td>{{sec.name}}</td>
            <td>{{sec.description}}</td>
            <td>{{sec.has_generic_answer}}</td>
            <td>{{sec.time_duration}}</td>
            <td>
              <a class="waves-effect waves-light" routerLink="{{sec.id}}"><i class="material-icons left">announcement</i></a>
            	<a class="waves-effect waves-light green-text" (click)="onAction(sec)"><i class="material-icons left">edit</i></a>
            	<a class="waves-effect waves-light red-text" (click)="onDelete(sec.id)"><i class="material-icons left">close</i></a>
            </td>
          </tr>
        </tbody>
      </table>
      </div>
    </div>`
})
 
export class MainSectionComponent implements OnInit { 

section_data;
  sec;
  formValid = false;
  formSubmitted = false;

  constructor(private sectionService:SectionService) { }

  ngOnInit() {
    this.sec = [];
  	this.sectionService.getSection().subscribe(res => {
      this.section_data = res;
  	});
  }

  onSubmit(sectionForm: NgForm) {
    Materialize.Toast.removeAll();
    this.formSubmitted = true;
    if(sectionForm.valid){
      this.formValid = true;
      this.sectionService.addSection(sectionForm.value).subscribe(res => {
        if(res['success']){
          this.sec = []
          Materialize.toast('New section created.', 4000);
          this.formSubmitted = false;

          this.sectionService.getSection().subscribe(res => {
            this.section_data = res;
          });

        }
      });
    }
  }

  onDelete(id){
    Materialize.Toast.removeAll();
    this.sectionService.deleteSection(id).subscribe(res => {
      if(res['success']){
        this.sec = []
        Materialize.toast('Section deleted.', 4000);

        this.sectionService.getSection().subscribe(res => {
          this.section_data = res;
        });

      }
    });
  }

  onAction(data){
    var label1 = $("label[for='section_name']");
    var label2 = $("label[for='description']");
    var label3 = $("label[for='time_duration']");
    if (label1 && label2) {
      label1[0].classList.value = 'active';
      label2[0].classList.value = 'active';
      label3[0].classList.value = 'active';

      this.sec.id = data.id;
      this.sec.name = data.name;
      this.sec.description = data.description;
      this.sec.has_generic_answer = data.has_generic_answer;
      this.sec.time_duration = data.time_duration;
    }
  }

}
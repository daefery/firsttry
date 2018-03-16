import { Component, AfterViewInit } from '@angular/core';
declare var $,Materialize:any;
@Component({
  template: `
	<div class="slider fullscreen">
  <ul class="slides">
    <li>
      <img src="assets/images/assessments/Creative Expression.jpg"> <!-- random image -->
      <div class="caption right-align">
        <h3>Data Diri.</h3>
				<h5 class="light grey-text text-lighten-3">deskripsi data diri.</h5>
      </div>
    </li>
    <li>
      <img src="assets/images/assessments/Entrepreneurial.jpg"> <!-- random image -->
      <div class="caption left-align">
        <h3>Minat Bakat</h3>
				<h5 class="light grey-text text-lighten-3">deksripsi minta bakat.</h5>
      </div>
    </li>
    <li>
      <img src="assets/images/assessments/cognitive.jpg"> <!-- random image -->
      <div class="caption right-align">
        <h3>Cognitive.</h3>
				<h5 class="light grey-text text-lighten-3">deskripsi cognitive.</h5>
      </div>
		</li>
		<li>
		<img src="assets/images/assessments/Public Speaking.jpg"> <!-- random image -->
		<div class="caption left-align">
			<h3>Personality.</h3>
			<h5 class="light grey-text text-lighten-3">deskripsi personality.</h5>
		</div>
	</li>
	</ul>
</div>
<div class="center-div">
	<a class="btn waves-effect waves-light" style="height: 50px;
	width: 200px;
	padding: 8px;
	font-size: 20px;" routerLink="/exam/demography" id="menu">Mulai</a>
	<a class="btn waves-effect waves-light" style="height: 50px;
	width: 200px;
	padding: 8px;
	font-size: 20px;
	background-color: #4caf50;" (click)="showInput=true">Masuk</a>
	<div style="background-color:rgba(0,0,0,0.54);margin-top: 10px;color:white;padding: 10px;" *ngIf="showInput">
		<input placeholder="Masukan alamat email" id="first_name" type="email">
		<a href="!#" (click)="showInput=false" style="float: right;
    position: relative;
    bottom: 50px;
    left: 5px;"><i class="material-icons">close</i></a>
	</div>
</div>
	`,
	styles:[`
	.center-div
	{
		z-index: 1000;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    padding: 20px;
    text-align: center;
	}
	`]
})
 
export class ExaminationComponent implements AfterViewInit { 
	showInput=false;
  constructor() { 
		localStorage.removeItem('cognitive');
		localStorage.removeItem('cognitive-demo');
		localStorage.removeItem('personality');
		localStorage.removeItem('personality-demo');
		localStorage.removeItem('interest');
		localStorage.removeItem('interest-demo');
		localStorage.removeItem('demography');
		localStorage.removeItem('demography-demo');
		localStorage.setItem("start", "true");
	}
	
	ngAfterViewInit(): void {
		$('.slider').slider();
	}
}
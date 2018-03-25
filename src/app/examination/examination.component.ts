import { Component, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
declare var $,Materialize:any;
@Component({
  template: `
	<div class="slider fullscreen">
  <ul class="slides">
    <li>
      <img src="assets/images/exam/home/data-diri.jpg"> <!-- random image -->
      <div class="caption left-align">
        <h3 class="blue-grey-text">Data Diri</h3>
				<h5 class="blue-grey-text lighten-3">deskripsi data diri</h5>
      </div>
    </li>
    <li>
      <img src="assets/images/assessments/Entrepreneurial.jpg"> <!-- random image -->
      <div class="caption right-align">
        <h3>Minat</h3>
				<h5 class="light grey-text text-lighten-3">deksripsi minta</h5>
      </div>
    </li>
    <li>
      <img src="assets/images/exam/home/cognitive.jpg"> <!-- random image -->
      <div class="caption right-align">
        <h3>Kognitif</h3>
				<h5 class="light grey-text text-lighten-3">deskripsi Kognitif</h5>
      </div>
		</li>
		<li>
		<img src="assets/images/exam/home/personality.jpg"> <!-- random image -->
		<div class="caption left-align">
			<h3 class="blue-grey-text">Personality</h3>
			<h5 class="blue-grey-text lighten-3">deskripsi personality</h5>
		</div>
	</li>
	</ul>
</div>
<div class="center-div">
	<a class="btn waves-effect waves-light home-button" (click)="Start()" id="menu">Mulai</a>
	<a class="btn waves-effect waves-light home-button-login" (click)="showInput=true">Masuk</a>
	<div class="input-home" *ngIf="showInput">
		<input placeholder="Masukan alamat email" id="email" type="email" (keydown)="keyDownFunction($event)" [(ngModel)]="email">
		<a href="javascript:void(0)" (click)="showInput=false" class="red-text"><i class="material-icons">close</i></a>
	</div>
</div>
<div id="modal1" class="modal bottom-sheet">
    <div class="modal-content">
			<h5>Anda dalam proses pengerjaan sebelumnya, Dengan menekan tombol <b>SETUJU</b> anda akan mengulang kembali proses tes dari awal <br>atau 
			Tekan tombol <b>MASUK</b> untuk kembali pada tes terakhir anda.</h5>
      <h5>Apakah anda setuju?</h5>
    </div>
    <div class="modal-footer">
      <a href="javascript:void(0)" class="modal-action modal-close waves-effect waves-green btn red" (click)="btnAction(false)">Tidak Setuju</a>
      <a href="javascript:void(0)" class="modal-action modal-close waves-effect waves-green btn" (click)="btnAction(true)">Setuju</a>
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
	.home-button,.home-button-login{
		height: 50px;
		width: 200px;
		padding: 8px;
		font-size: 20px;
	}
	.home-button-login{
		background-color:#4CAF50;
	}
	.home-button-login:hover{
		background-color: #83c586; /* Green */
    color: white;
	}
	.input-home{
		background-color:rgba(0,0,0,0.54);
		margin-top: 10px;
		color:white;
		padding: 10px;
	}
	.input-home a{
		float: right;
    position: relative;
    bottom: 50px;
    left: 5px;
	}
	`]
})
 
export class ExaminationComponent implements AfterViewInit { 
	showInput=false;
	email='';
	url = '/exam/demography';
		constructor(private router:Router) { 
		localStorage.removeItem('cognitive');
		localStorage.removeItem('cognitive-demo');
		localStorage.removeItem('personality');
		localStorage.removeItem('personality-demo');
		localStorage.removeItem('interest');
		localStorage.removeItem('interest-demo');
		localStorage.removeItem('demography');
		localStorage.removeItem('demography-demo');
		localStorage.removeItem('accountId');
		localStorage.setItem("start", "true");
	}
	
	ngAfterViewInit(): void {
		$('.slider').slider();
	}

	Start(){
		let history = localStorage.getItem("history") != null?JSON.parse(localStorage.getItem("history")):null;
		if(history!=null){
			$('#modal1').modal('open');
		}else{
			this.router.navigateByUrl(this.url);
		}
	}

	btnAction(agree){
		if(agree){
			localStorage.removeItem('history');
			this.router.navigateByUrl(this.url);
		}else{
			$('#modal1').modal('close');
		}
	}

	keyDownFunction(event) {
		var toastElement = $('.toast').first()[0];
		if(toastElement != undefined || toastElement != null){
			var toastInstance = toastElement.M_Toast;
			toastInstance.remove();
		}
		if(event.keyCode == 13) {
			let history = localStorage.getItem("history") != null?JSON.parse(localStorage.getItem("history")):null;
			if(history != null){
				if(history.email == this.email){
					Materialize.toast('Selamat Datang Kembali!', 4000);
					this.router.navigateByUrl(history.last_url);
				}else{
					Materialize.toast('Data Tidak Ditemukan!', 4000);
				}
			}else{
				Materialize.toast('Data Tidak Ditemukan!', 4000);
			}
		}
	}
}
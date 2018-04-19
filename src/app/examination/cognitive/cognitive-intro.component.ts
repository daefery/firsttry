import { Component, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
declare var $:any;

@Component({
    template:`
    <div class="slider fullscreen">
    <ul class="slides">
        <li>
        <img src="assets/images/exam/home/cognitive.jpg"> <!-- random image -->
        <div class="caption center-align row" id="caption">
            <div class="col s12" style="background-color: rgba(0,0,0,0.54);padding: 20px;margin-top: -100px;">
            <h3 class="white-text">{{title}}</h3>
            <h5 class="white-text">(Instruksi Pengerjaan)</h5>
            <p class="flow-text" style="margin:3px" *ngFor="let prop of description">&#9679; {{prop}}</p>
            <a class="btn waves-effect waves-light" routerLink="intro">Mulai</a>
            </div>
        </div>
        </li>
    </ul>
    </div>
  `
})
 
export class CognitiveIntroComponent implements AfterViewInit { 
    
    description=[
        'Berikut ini saudara akan di sajikan tes yang mengukur kemampuan kognitif saudara.',
        'Tes ini terdiri dari beberapa kelompok soal.',
        'Setiap kelompok soal berdiri sendiri‐sendiri oleh karena itu perhatikanlah setiap instruksi yang diberikan pada setiap kelompok soalnya.',
        'Setiap kelompok soal memiliki batas waktunya masing‐masing. Sdr. hanya diperkenankan mengerjakan soal pada waktu kelompok soalnya masing‐masing.',
        'Sebelum anda lanjutkan pada bagian tes pastikan saudara mempersiapkan alat tulis (pulpen, pensil dan kertas) untuk melakukan perhitungan.',
        'Adapun cara menjawab adalah dengan memberikan tanda pada bagian yang telah disediakan.',
        'Bekerjalah dengan kemampuan Saudara sendiri dan sungguh‐sungguh.'
    ];
    // description = 'Berikut ini saudara akan di sajikan tes yang mengukur kemampuan kognitif saudara.<br>'+
    // 'Tes ini terdiri dari beberapa kelompok soal.<br>'+
    // 'Setiap kelompok soal berdiri sendiri‐sendiri oleh karena itu perhatikanlah setiap instruksi yang diberikan pada setiap kelompok soalnya.<br>'+
    // 'Setiap kelompok soal memiliki batas waktunya masing‐masing. Sdr. hanya diperkenankan mengerjakan soal pada waktu kelompok soalnya masing‐masing.<br>'+
    // 'Sebelum anda lanjutkan pada bagian tes pastikan saudara mempersiapkan alat tulis (pulpen, pensil dan kertas) untuk melakukan perhitungan.<br>'+
    // 'Adapun cara menjawab adalah dengan memberikan tanda pada bagian yang telah disediakan.<br>'+
    // 'Bekerjalah dengan kemampuan Saudara sendiri dan sungguh‐sungguh';
    title='Kognitif';
  constructor(private router:Router) { 
    let history = localStorage.getItem("history") != null?JSON.parse(localStorage.getItem("history")):null;
    if(history!=null){
        localStorage.setItem(history.session, 'true');
        localStorage.setItem('accountId', history.accountId);
    }
    let p = localStorage.getItem('demography');
    let accountid = localStorage.getItem('accountId');
    if(p == null || accountid == null){
            this.router.navigateByUrl('/forbidden');
    }else{
        localStorage.setItem('cognitive-demo', "true");
    }
  }
    ngAfterViewInit(): void {
        $('.slider').slider({
            indicators:false
        });
    }
}
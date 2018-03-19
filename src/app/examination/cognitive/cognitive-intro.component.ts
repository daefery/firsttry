import { Component, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
declare var $:any;

@Component({
    template:`
    <div class="slider fullscreen">
    <ul class="slides">
        <li>
        <img src="assets/images/exam/home/cognitive.jpg"> <!-- random image -->
        <div class="caption center-align">
            <div class="" style="background-color: rgba(0,0,0,0.3);padding: 15px;">
            <h3 class="white-text">{{title}}</h3>
            <p class="white-text flow-text">{{description}}</p>
            <a class="btn waves-effect waves-light" routerLink="1">Mulai</a>
            </div>
        </div>
        </li>
    </ul>
    </div>
  `
})
 
export class CognitiveIntroComponent implements AfterViewInit { 
    
    description='Cognitive meliputi ukuran, struktur, dan distribusi penduduk, serta bagaimana jumlah penduduk berubah setiap waktu akibat kelahiran, kematian, migrasi, serta penuaan. Analisis kependudukan dapat merujuk masyarakat secara keseluruhan atau kelompok tertentu yang didasarkan kriteria seperti pendidikan, kewarganegaraan, agama, atau etnisitas tertentu.';
    title='Cognitive';
  constructor(private router:Router) { 
    let p = localStorage.getItem('interest');
    if(p == null){
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
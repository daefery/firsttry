import { Component, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
declare var $:any;
@Component({
  template: `
  <div class="slider fullscreen">
  <ul class="slides">
    <li>
      <img src="assets/images/exam/home/data-diri.jpg"> <!-- random image -->
      <div class="caption center-align">
        <div class="" style="background-color: rgba(0,0,0,0.54);padding: 15px;">
          <h3 class="white-text">{{title}}</h3>
          <p class="white-text flow-text">Hallo, Selamat datang di Faxtor. Untuk mendapatkan gambaran mengenai diri anda, berikut akan kami sajikan form yang terdiri beberapa pertanyaan mengenai data diri.</p>
          <p class="white-text flow-text">Untuk mendapatkan gambaran dan potensi optimal mengenai diri anda, kami akan menyajikan beberapa pertanyaan mengenai diri saudara kami memohon kesediaan anda untuk  mengisi form mengenai data diri anda.</p>
          <p class="white-text flow-text">Isilah setiap informasi yang ditanyakan sesuai dengan maksudnya secara lengkap dan sesuai dengan keadaan anda yang sebenarnya.</p>
          <a class="btn waves-effect waves-light" routerLink="start">Mulai</a>
        </div>
      </div>
    </li>
    </ul>
    </div>
  `,
  styles:[`
  `]
})
 
export class DemographyIntroComponent implements AfterViewInit { 
  description='Demografi meliputi ukuran, struktur, dan distribusi penduduk, serta bagaimana jumlah penduduk berubah setiap waktu akibat kelahiran, kematian, migrasi, serta penuaan. Analisis kependudukan dapat merujuk masyarakat secara keseluruhan atau kelompok tertentu yang didasarkan kriteria seperti pendidikan, kewarganegaraan, agama, atau etnisitas tertentu.';
  title='Data Diri';
  ngAfterViewInit(): void {
    $('.slider').slider({
      indicators:false
    });
  }
  constructor(private router:Router) { 
    let p = localStorage.getItem('start');
    if(p == null){
			this.router.navigateByUrl('/forbidden');
    }else{
      localStorage.setItem('demography-intro', "true");
    }
  }
}
import { Component, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
declare var $:any;

@Component({
    template:`
    <div class="slider fullscreen">
    <ul class="slides">
        <li>
        <img src="assets/images/exam/home/Entrepreneurial.jpg"> <!-- random image -->
        <div class="caption center-align">
            <div class="" style="background-color: rgba(0,0,0,0.54);padding: 15px;">
            <h3 class="white-text">{{title}}</h3>
            <p class="white-text flow-text">{{description}}</p>
            <a class="btn waves-effect waves-light" routerLink="1/1">Mulai</a>
            </div>
        </div>
        </li>
    </ul>
    </div>
  `
})
 
export class InterestIntroComponent implements AfterViewInit { 
    
    description=`Tes ini terdiri dari dua bagian. Pada bagian I saudara akan menemukan berbagai
    aktivitas-aktivitas pekerjaan. Untuk bagian II saudara akan menemukan daftar
    jenis pekerjaan yang akan saudara temui dimasa yang akan datang. Berilah
    penilaian untuk setiap soal dengan teliti dan pastikan tidak ada soal yang
    terlewat.`;
    title='Minat';
  constructor(private router:Router) { 
    let history = localStorage.getItem("history") != null?JSON.parse(localStorage.getItem("history")):null;
    if(history!=null){
        localStorage.setItem(history.session, 'true');
        localStorage.setItem('accountId', history.accountId);
    }
    let p = localStorage.getItem('cognitive');
    let accountid = localStorage.getItem('accountId');
    if(p == null || accountid == null){
            this.router.navigateByUrl('/forbidden');
    }else{
        localStorage.setItem('interest-demo', "true");
    }
  }

    ngAfterViewInit(): void {
        $('.slider').slider({
            indicators:false
        });
    }
}
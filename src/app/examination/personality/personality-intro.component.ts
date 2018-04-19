import { Component, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
declare var $:any;

@Component({
    template:`
    <div class="slider fullscreen">
    <ul class="slides">
        <li>
        <img src="assets/images/exam/home/personality.jpg"> <!-- random image -->
        <div class="caption center-align">
            <div class="" style="background-color: rgba(0,0,0,0.54);padding: 15px;">
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
 
export class PersonalityIntroComponent implements AfterViewInit { 
    
description='Pada test ini anda akan menemukan beberapa karakteristik yang mungkin akan menggambarakan diri saudara, pilihlah karakter yang paling mendekati dengan keadaan diri saudara yang sebenarnya dan bukan jawaban ideal. Pastikan anda mengisi setiap persoalan yang tersedia dan tidak ada yang terlewat.';
title='Personality';
  constructor(private router:Router) { 
    let history = localStorage.getItem("history") != null?JSON.parse(localStorage.getItem("history")):null;
    if(history!=null){
        localStorage.setItem(history.session, 'true');
        localStorage.setItem('accountId', history.accountId);
    }
    let p = localStorage.getItem('interest');
    let accountid = localStorage.getItem('accountId');
    if(p == null || accountid == null){
        this.router.navigateByUrl('/forbidden');
    }else{
        localStorage.setItem('personality-demo', "true");
    }
  }
    ngAfterViewInit(): void {
        $('.slider').slider({
            indicators:false
        });
    }
}
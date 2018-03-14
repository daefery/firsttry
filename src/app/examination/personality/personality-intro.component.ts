import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    template:`
    <div class="container">
    <div class="col s12 m7">
    <h2 class="header">Personality</h2>
    <div class="card horizontal">
    <div class="card-image">
    <img src="assets/images/exam/personality.jpg">
    </div>
    <div class="card-stacked">
    <div class="card-content">
        <p>I am a very simple card. I am good at containing small bits of information.</p>
    </div>
    <div class="card-action">
        <a routerLink="1">Mualai</a>
    </div>
    </div>
    </div>
    </div>
  </div>
  `
})
 
export class PersonalityIntroComponent { 
  constructor(private router:Router) { 
    let p = localStorage.getItem('cognitive');
    if(p == null){
            this.router.navigateByUrl('/forbidden');
    }else{
        localStorage.setItem('personality-demo', "true");
    }
  }
}
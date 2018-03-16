import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    template:`
    <div class="row">
    <div class="col s12">
    <h2 class="header">Cognitive</h2>
    <div class="card horizontal">
    <div class="card-image">
    <img src="assets/images/exam/cognitive.jpg">
    </div>
    <div class="card-stacked">
    <div class="card-content">
        <p>I am a very simple card. I am good at containing small bits of information.</p>
    </div>
    <div class="card-action">
        <a class="waves-effect waves-light btn" routerLink="1"><i class="material-icons right">forward</i>Mulai</a>
    </div>
    </div>
    </div>
    </div>
  </div>
  `
})
 
export class CognitiveIntroComponent { 
  constructor(private router:Router) { 
    let p = localStorage.getItem('interest');
    if(p == null){
            this.router.navigateByUrl('/forbidden');
    }else{
        localStorage.setItem('cognitive-demo', "true");
    }
  }
}
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  template: `
  <div class="container">
    <div class="col s12">
    <h2 class="header">Demografi</h2>
    <div class="card horizontal">
    <div class="card-image">
    <img src="assets/images/exam/demography.jpg">
    </div>
    <div class="card-stacked">
    <div class="card-content">
        <p>I am a very simple card. I am good at containing small bits of information.</p>
    </div>
    <div class="card-action">
        <a routerLink="start">Mualai</a>
    </div>
    </div>
    </div>
    </div>
  </div>
  `
})
 
export class DemographyIntroComponent { 
  constructor(private router:Router) { 
    let p = localStorage.getItem('start');
    if(p == null){
			this.router.navigateByUrl('/forbidden');
    }else{
      localStorage.setItem('demography-intro', "true");
    }
  }
}
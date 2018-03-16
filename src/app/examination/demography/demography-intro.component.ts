import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  template: `
  <div class="row">
    <div class="col s12">
    <h2 class="header">Data Diri</h2>
    <div class="card horizontal">
    <div class="card-image">
    <img src="assets/images/exam/demography.jpg">
    </div>
    <div class="card-stacked">
    <div class="card-content">
        <p class="flow-text">Nunc iaculis, odio ut pellentesque rutrum, nulla felis ultricies erat, a pretium tellus nulla id massa. In aliquet libero eget sapien malesuada accumsan. Curabitur pretium vel.Nunc iaculis, odio ut pellentesque rutrum, nulla felis ultricies erat, a pretium tellus nulla id massa. In aliquet libero eget sapien malesuada accumsan. Curabitur pretium vel.</p>
    </div>
    <div class="card-action">
        <a class="waves-effect waves-light btn" routerLink="start"><i class="material-icons right">forward</i>Mulai</a>
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
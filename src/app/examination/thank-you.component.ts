import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  template: `
  <div class="container">
    <div class="row">
        <img src="assets/images/exam/thankyou.jpg" class="responsive-img">
    </div>
  </div>
  `
})
 
export class ThankYouComponent { 
  constructor(private router:Router) { 
    let p = localStorage.getItem('personality');
    if(p == null){
            this.router.navigateByUrl('/forbidden');
    }else{
        localStorage.setItem('personality', "true");
    }
  }
}
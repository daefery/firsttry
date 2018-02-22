import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'my-app',
  template: `
  <div class="row container center" style="margin-top:20px">
    <a class="waves-effect waves-light btn" routerLink="section">Section</a>
  </div>
  <router-outlet></router-outlet>
  `
})
 
export class AdminComponent implements OnInit, OnDestroy { 
  constructor(private router:ActivatedRoute) { 
  }
  ngOnInit() {
    
  }

  ngOnDestroy() {
  }
}
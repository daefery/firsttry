import { Component } from '@angular/core';

@Component({
  template: `
    <div style="text-align:center">
	  <h1>
	    Welcome to {{ title }}!
	  </h1>
	  <img width="300" alt="Angular Logo" src="assets/images/pp.jpg">
	
	  <h2>Here are some links to help you start: </h2>
		<ul>
		  <li>
		    <h2><a routerLink="/exam/demography">DemoGraphy</a></h2>
		  </li>
		</ul>
	</div>
  `
})
 
export class ExaminationComponent { 
  constructor() { 
  }
}
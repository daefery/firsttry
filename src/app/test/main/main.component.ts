import { Component } from '@angular/core';

@Component({
  template: `
    <div class="container">
      <h1>Selamat Datang di Testing</h1>
      <a routerLink="biodata">Start</a>
    </div>
    
  `
})
 
export class MainComponent { 
  constructor() { 
  }
}
import { Component } from '@angular/core';

import { Biodata } from './biodata';

@Component({
  selector: 'my-app',
  template: `
    <h1>Angular dynamic reactive forms</h1>

    <dynamic-form [dataObject]="biodata"></dynamic-form>
  `
})
export class ExampleComponent {
  biodata;

  constructor() {
    this.biodata = Biodata;
  }
}

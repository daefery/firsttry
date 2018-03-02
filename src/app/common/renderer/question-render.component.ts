import {Component, Input} from '@angular/core';

@Component({
  selector: 'question-render',
  template: `
    <div>
      <h1>{{name}}</h1>
      <p>{{city}}</p>
    </div>
  `
})
export class QuestionRenderComponent {
  @Input() name: string
  @Input() city: string
  constructor() {}
}

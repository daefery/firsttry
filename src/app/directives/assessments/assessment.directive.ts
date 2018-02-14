import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appAssessment]'
})
export class AssessmentDirective {

  constructor(private el: ElementRef) { 
  	el.nativeElement.style.backgroundColor = 'yellow';
  }
}

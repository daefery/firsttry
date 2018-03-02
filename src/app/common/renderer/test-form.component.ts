import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
declare var $:any;

@Component({
  selector: 'form-render',
  templateUrl: './dynamic-form-template.component.html'
})
export class TestFormComponent implements OnInit, AfterViewInit{
  @Input() formList:any;
  objectProps;
  model:any;
  constructor() {
  }

  ngOnInit() {
    this.model = [];
    console.log(this.formList);
  }

  ngAfterViewInit(){
    $(document).ready(function() {
      //$(".browser-default").select2();
      /*$('.browser-default').on('select2:select', function (e) {
          var data = e.params.data;
          console.log(data);
      });*/
    });
  }

  private mapValidators(validators) {
    const formValidators = [];

    if(validators) {
      for(const validation of Object.keys(validators)) {
        if(validation === 'required') {
          formValidators.push(Validators.required);
        } else if(validation === 'min') {
          formValidators.push(Validators.min(validators[validation]));
        }
      }
    }

    return formValidators;
  }

  onSubmit(form) {
    console.log(form.value);
    console.log(form.valid);
  }

  onChange(animal) {
    console.log(animal);
  }

  getType(data){
      console.log(data);
  }
}

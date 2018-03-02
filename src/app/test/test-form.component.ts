import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
declare var $:any;

@Component({
  selector: 'form-render',
  templateUrl: '../common/renderer/form/dynamic-form-template.component.html'
})
export class TestFormComponent implements OnInit, AfterViewInit{
  @Input() formList:any;
  objectProps;
  listMessage:string[];
  loginForm : FormGroup;
  constructor() {
  }

  ngOnInit() {
    console.log(this.formList);
  }

  ngAfterViewInit(){
    $(document).ready(function() {
      $('.modal').modal();
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
    let array = this.formList.data;

    array.forEach(function (result) {
    //  console.log(result);
      if(result.type == 'group' || result.type == 'single'){
        let idx = result.values;
        idx.forEach(function(childResult){
          //validationForm(childResult.validation, form.value);
        });
      }
    });



    this.listMessage = [
      "message 3",
      "message 2",
      "message 1",
    ]
    if(!form.valid){
      $('#modal1').modal('open');
    }
    console.log(form.value);
    console.log(form.valid);
  }

  validationForm(validParam, data){
    for (let prop in data) {
        console.log(data.prop);
    }
  }

  getType(data){
    console.log(data);
  }
}

import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Field } from '../../models/field.interface';
import { FieldConfig } from '../../models/field-config.interface';

declare var $:any;
@Component({
  selector: 'form-select',
  styleUrls: ['form-select.component.scss'],
  template: `
    <div 
      class="dynamic-field form-select"
      [formGroup]="group">
      <label>{{ config.label }}</label>
      <select [formControlName]="config.name" [id]="config.name" class="browser-default">
        <option value="">{{ config.placeholder }}</option>
        <option *ngFor="let option of config.options">
          {{ option }}
        </option>
      </select>
    </div>
  `
})
export class FormSelectComponent implements Field, OnInit {
  config: FieldConfig;
  group: FormGroup;

  ngOnInit(){
    $(document).ready(function() {
      /*$(".browser-default").select2();
      $('.browser-default').on('select2:select', function (e) {
          var data = e.params.data;
          var id = e.target.id;

          var input = $("#"+id+'_temp');
          input.val(data.id).change();
          console.log($("#"+id+'_temp').val(data.id));
      });*/
    });
  }

  getValueOption(data){
    console.log(data);
  }
}

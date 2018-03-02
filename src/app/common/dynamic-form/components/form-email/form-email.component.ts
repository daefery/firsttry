import { Component, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Field } from '../../models/field.interface';
import { FieldConfig } from '../../models/field-config.interface';

@Component({
  selector: 'form-email',
  template: `
    <div 
      class="dynamic-field form-input" 
      [formGroup]="group">
      <label>{{ config.label }}</label>
      <input
        type="email"
        [attr.placeholder]="config.placeholder"
        [formControlName]="config.name" [email]="true">
    </div>
  `
})
export class FormEmailComponent implements Field {
  config: FieldConfig;
  group: FormGroup;
}

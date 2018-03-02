import { Component, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';

import { FieldConfig } from '@com/dynamic-form/models/field-config.interface';
import { DynamicFormComponent } from '@com/dynamic-form/containers/dynamic-form/dynamic-form.component';

@Component({
  selector: 'app-profile',
  template: `
    <div class="app">
      <dynamic-form
        [config]="config"
        #form="dynamicForm"
        (submit)="submit($event)">
      </dynamic-form>
      {{ form.valid }}
      {{ form.value | json }}
    </div>
  `,
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements AfterViewInit, OnInit {
	config:FieldConfig[];
  @ViewChild(DynamicFormComponent) form: DynamicFormComponent;

  

  ngOnInit(){

  	this.config= [
	    {
	      type: 'input',
	      label: 'Full name',
	      name: 'name',
	      placeholder: 'Enter your name',
	      validation: [Validators.required, Validators.minLength(4)]
	    },
	    {
	      type: 'email',
	      label: 'Email Address',
	      name: 'email',
	      placeholder: 'Enter Your Email',
	      validation: [Validators.required]
	    },
	    {
	      type: 'password',
	      label: 'Password',
	      name: 'email',
	      placeholder: 'Enter Your Password',
	      validation: [Validators.required, Validators.minLength(5)]
	    },
	    {
	      type: 'select',
	      label: 'Favourite Food',
	      name: 'food',
	      options: ['Pizza', 'Hot Dogs', 'Knakworstje', 'Coffee'],
	      placeholder: 'Select an option',
	      validation: [Validators.required]
	    },
	    {
	      label: 'Submit',
	      name: 'submit',
	      type: 'button'
	    }
  	];
  }

  ngAfterViewInit() {
    let previousValid = this.form.valid;
    this.form.changes.subscribe(() => {
      if (this.form.valid !== previousValid) {
        previousValid = this.form.valid;
        this.form.setDisabled('submit', !previousValid);
      }
    });

  }

  submit(value: {[name: string]: any}) {
    console.log(value);
  }

}

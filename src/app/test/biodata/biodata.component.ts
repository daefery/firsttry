import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup } from '@angular/forms';
import { Biodata } from './biodata';
declare var $:any;

@Component({
  template: `
    <div class="row container">
    <div class="card white">
		<div class="card-content">
	  		<span class="card-title"><h3>Biodata</h3></span>
			<hr class="hr-form"><br><br>
		  	<div class="row">
		  	
		  		<form-render [formList]="generalSection"></form-render>
		  	</div>
		</div>
		<div class="card-action">
		  <a class="waves-effect waves-light btn" style="margin-left: 77%;" routerLink="/test/cognitive"><i class="material-icons right">arrow_forward</i>Selanjutnya</a>
		</div>
	</div>
  </div>
  `
})
 
export class BiodataComponent implements OnInit { 
	generalSection;
	contactSection;
	oldAddressSection;
	newAddressSection;
	lastEducationSection;
	futureEducationSection;
	formData;
	biodata;
	model;
	constructor() { 

	}

  ngOnInit(){
	this.model=[];
  	this.generalSection = Biodata;
  	

  	/*this.contactSection = [
  		{
	      "type":"group",
	      "values":[
	      	{
	      		"name":"email",
	      		"type":"email",
				"text":"Email",
	      		"div_class":"input-field col s6",
	      		"input_class":"",
	      		"validation":"required",
	      		"values":[],
	      		"alternative_text":"",
	      		"event":""
      		},
      		{
	      		"name":"phone",
	      		"type":"text",
				"text":"No Telepon",
	      		"div_class":"input-field col s6",
	      		"input_class":"",
	      		"validation":"required",
	      		"values":[],
	      		"alternative_text":"",
	      		"event":""
      		}
	      ]
	    },
  	];

  	this.oldAddressSection = [
  		{
	      "type":"single",
	      "values":[
      		{
	      		"name":"old_address",
	      		"type":"textarea",
				"text":"Alamat",
	      		"div_class":"input-field col s12",
	      		"input_class":"",
	      		"validation":"required",
	      		"values":[],
	      		"alternative_text":"",
	      		"event":""
      		}
	      ]
	    },
	    {
	      "type":"group",
	      "values":[
	      	{
	      		"name":"old_province",
	      		"type":"select",
				"text":"Provinsi",
				"div_class":"input-field col s6",
	      		"input_class":"",
	      		"validation":"",
	      		"values":[
	      			{"text":"Islam", "value":"Islam"},
	      			{"text":"Kristen", "value":"Kristen"}
	      		],
	      		"alternative_text":"Pilih Provinsi",
	      		"event":""
      		},
      		{
	      		"name":"old_district",
	      		"type":"select",
				"text":"Kabupaten",
				"div_class":"input-field col s6",
	      		"input_class":"",
	      		"validation":"",
	      		"values":[
	      			{"text":"A", "value":"O"},
	      			{"text":"O", "value":"O"}
	      		],
	      		"alternative_text":"Pilih Kabupaten",
	      		"event":""
      		},
	      ]
	    },
  	];

  	this.newAddressSection = [
  		{
	      "type":"single",
	      "values":[
      		{
	      		"name":"old_address",
	      		"type":"textarea",
				"text":"Alamat",
	      		"div_class":"input-field col s12",
	      		"input_class":"",
	      		"validation":"required",
	      		"values":[],
	      		"alternative_text":"",
	      		"event":""
      		}
	      ]
	    },
	    {
	      "type":"group",
	      "values":[
	      	{
	      		"name":"old_province",
	      		"type":"select",
				"text":"Provinsi",
				"div_class":"input-field col s6",
	      		"input_class":"",
	      		"validation":"",
	      		"values":[
	      			{"text":"Islam", "value":"Islam"},
	      			{"text":"Kristen", "value":"Kristen"}
	      		],
	      		"alternative_text":"Pilih Provinsi",
	      		"event":""
      		},
      		{
	      		"name":"old_district",
	      		"type":"select",
				"text":"Kabupaten",
				"div_class":"input-field col s6",
	      		"input_class":"",
	      		"validation":"",
	      		"values":[
	      			{"text":"A", "value":"O"},
	      			{"text":"O", "value":"O"}
	      		],
	      		"alternative_text":"Pilih Kabupaten",
	      		"event":""
      		},
	      ]
	    },
  	];

  	this.lastEducationSection = [
  		{
	      "type":"group",
	      "values":[
	      	{
	      		"name":"old_education",
	      		"type":"select",
				"text":"Pendidikan Terakhir",
				"div_class":"input-field col s6",
	      		"input_class":"",
	      		"validation":"",
	      		"values":[
	      			{"text":"SD", "value":"Islam"},
	      			{"text":"SMP", "value":"Kristen"}
	      		],
	      		"alternative_text":"Pilih Pendidikan Terakhir",
	      		"event":""
      		},
      		{
	      		"name":"old_schoolname",
	      		"type":"select",
				"text":"Nama Sekolah",
				"div_class":"input-field col s6",
	      		"input_class":"",
	      		"validation":"",
	      		"values":[
	      			{"text":"A", "value":"O"},
	      			{"text":"O", "value":"O"}
	      		],
	      		"alternative_text":"Pilih Nama Sekolah",
	      		"event":""
      		},
	      ]
	    },
	    {
	      "type":"group",
	      "values":[
	      	{
	      		"name":"is_old_other_school",
	      		"type":"checkbox",
				"text":"Sekolah Lainnya",
				"div_class":"col s6",
	      		"input_class":"filled-in",
	      		"validation":"",
	      		"values":[],
	      		"alternative_text":"",
	      		"event":""
      		},
      		{
	      		"name":"other_old_schoolname",
	      		"type":"text",
				"text":"Nama Sekolah",
	      		"div_class":"input-field col s6",
	      		"input_class":"",
	      		"validation":"required",
	      		"values":[],
	      		"alternative_text":"",
	      		"event":""
      		},
	      ]
	    },
  	];

*/
  	this.formData = [
	    {
	      "type":"group",
	      "values":[
	      	{
	      		"name":"full_name",
	      		"type":"text",
				"text":"Nama Lengkap",
	      		"div_class":"input-field col s6",
	      		"input_class":"",
	      		"validation":"required",
	      		"values":[],
	      		"alternative_text":"",
	      		"event":""
      		},
      		{
	      		"name":"gender",
	      		"type":"select",
				"text":"Pilih Jenis Kelamin",
				"div_class":"input-field col s6",
	      		"input_class":"",
	      		"validation":"",
	      		"values":[
	      			{"text":"Laki-Laki", "value":"L"},
	      			{"text":"Perempuan", "value":"P"}
	      		],
	      		"alternative_text":"Pilih Jenis Kelamin",
	      		"event":""
      		},
	      ]
	    },
	    {
	      "type":"group",
	      "values":[
	      	{
	      		"name":"email",
	      		"type":"email",
				"text":"Email",
	      		"div_class":"input-field col s6",
	      		"input_class":"",
	      		"validation":"required",
	      		"values":[],
	      		"alternative_text":"",
	      		"event":""
      		},
      		{
	      		"name":"phone",
	      		"type":"text",
				"text":"No Telepon",
	      		"div_class":"input-field col s6",
	      		"input_class":"",
	      		"validation":"required",
	      		"values":[],
	      		"alternative_text":"",
	      		"event":""
      		}
	      ]
	    },
	    {
	      "type":"group",
	      "values":[
	      	{
	      		"name":"religion",
	      		"type":"select",
				"text":"Agama",
				"div_class":"input-field col s6",
	      		"input_class":"",
	      		"validation":"",
	      		"values":[
	      			{"text":"Islam", "value":"Islam"},
	      			{"text":"Kristen", "value":"Kristen"}
	      		],
	      		"alternative_text":"Pilih Agama",
	      		"event":""
      		},
      		{
	      		"name":"gender",
	      		"type":"select",
				"text":"Golongan Darah",
				"div_class":"input-field col s6",
	      		"input_class":"",
	      		"validation":"",
	      		"values":[
	      			{"text":"A", "value":"O"},
	      			{"text":"O", "value":"O"}
	      		],
	      		"alternative_text":"Pilih Golongan Darah",
	      		"event":""
      		},
	      ]
	    },
	    {
	      "type":"group",
	      "values":[
	      	{
	      		"name":"birth_place",
	      		"type":"text",
				"text":"Tempat Lahir",
	      		"div_class":"input-field col s6",
	      		"input_class":"",
	      		"validation":"required",
	      		"values":[],
	      		"alternative_text":"",
	      		"event":""
      		},{
	      		"name":"birthdate",
	      		"type":"date",
				"text":"Tanggal Lahir",
	      		"div_class":"input-field col s6",
	      		"input_class":"datepicker",
	      		"validation":"",
	      		"values":[],
	      		"alternative_text":"",
	      		"event":""
      		},
	      ]
	    },
	    {
	      "type":"group",
	      "values":[
	      	{
	      		"name":"university",
	      		"type":"select",
				"text":"Universitas",
				"div_class":"input-field col s6",
	      		"input_class":"",
	      		"validation":"",
	      		"values":[
	      			{"text":"UI", "value":"Islam"},
	      			{"text":"BINUS", "value":"Kristen"}
	      		],
	      		"alternative_text":"Pilih Universitas",
	      		"event":""
      		},
      		{
	      		"name":"prodi",
	      		"type":"select",
				"text":"Jurusan",
				"div_class":"input-field col s6",
	      		"input_class":"",
	      		"validation":"",
	      		"values":[
	      			{"text":"SI", "value":"O"},
	      			{"text":"TK", "value":"O"}
	      		],
	      		"alternative_text":"Pilih Jurusan",
	      		"event":""
      		},
	      ]
	    },
	    {
	      "type":"group",
	      "values":[
	      	{
	      		"name":"is_other_university",
	      		"type":"checkbox",
				"text":"Universitas Lainnya",
				"div_class":"col s6",
	      		"input_class":"filled-in",
	      		"validation":"",
	      		"values":[],
	      		"alternative_text":"",
	      		"event":""
      		},
      		{
	      		"name":"is_other_prodi",
	      		"type":"checkbox",
				"text":"Jurusan Lainnya",
				"div_class":"col s6",
	      		"input_class":"filled-in",
	      		"validation":"",
	      		"values":[],
	      		"alternative_text":"",
	      		"event":""
      		},
	      ]
	    },
	    {
	      "type":"group",
	      "values":[
	      	{
	      		"name":"other_university",
	      		"type":"text",
				"text":"Universitas",
	      		"div_class":"input-field col s6",
	      		"input_class":"",
	      		"validation":"required",
	      		"values":[],
	      		"alternative_text":"",
	      		"event":""
      		},
      		{
	      		"name":"other_prodi",
	      		"type":"text",
				"text":"Jurusan",
	      		"div_class":"input-field col s6",
	      		"input_class":"",
	      		"validation":"required",
	      		"values":[],
	      		"alternative_text":"",
	      		"event":""
      		},
	      ]
	    },
	  ];
  }


  onSubmit(biodataForm: NgForm) {
  	console.log(biodataForm.value);
  	console.log(biodataForm.valid);
  }

  registerUser(form: NgForm) {
    console.log(form.value);
  }
}
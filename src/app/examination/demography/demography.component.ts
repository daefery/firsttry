import { Component, OnInit , OnChanges, AfterViewInit} from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { DemographyFormService } from './demography-form.service';
import { FormDataService } from './form-data.service'
import { Router } from '@angular/router';

declare var $,Materialize:any;
@Component({
  templateUrl:'./demography.component.html',
  styles:[`
	  	.progress{
			height: 60px;
			background-color: #b1dcfb;
		}
		.progress .determinate{
			background-color: #2c67ca;
		}
		.progress-text{
			position: relative;
			color:#fff
		}
	`]
})
 
export class DemographyComponent implements OnInit, OnChanges, AfterViewInit { 
	form: FormGroup;
	dataForm;
	listForm;
	validationMessage;
	submitted = false;
	OldDistrict = [];
	NewDistrict = [];
	Prodi = [];
	sectionCount=1;
	formSectionName;
	formProgress;
	loading=true;

    constructor(private fb: FormBuilder, private demographyFormService:DemographyFormService, private formDataService: FormDataService, private router: Router) {
		let p = localStorage.getItem('demography-intro');
		if(p == null){
				this.router.navigateByUrl('/forbidden');
		}
		this.listForm = [];
		this.form = new FormGroup({city:new FormControl('')});
		this.formDataService.getUniversity().subscribe(resUnv=>{
			this.formDataService.getProvince().subscribe(resProv=>{
				this.formDataService.getFaculty().subscribe(resFac=>{
					let kl = {
						university:resUnv,
						faculty:resFac,
						prodi:resUnv
					};
					let dats = [
						this.demographyFormService.getGeneralInfo(),
						this.demographyFormService.getContactInfo(),
						this.demographyFormService.getOldDom(resProv),
						this.demographyFormService.getNewDom(resProv),
						this.demographyFormService.getLastEdu(),
						this.demographyFormService.getNextEdu(kl)
					];
					this.formSectionName = dats[0].section_name;
					this.formProgress = 100/dats.length;
					this.dataForm = dats;
					this.toFormGroup(this.dataForm);
				});
				
			});
		});
    }

    onChange(data, event){
		console.log(data);
		console.log(event);
    	if(data != undefined){
			if(data == "old_district" || data == "new_district"){
				this.formDataService.getDistrict(event.name)
				.subscribe(result => {
					switch(data){
						case "old_district":
						this.OldDistrict = result;
						break;
						case "new_district":
						this.NewDistrict = result;
						break;
						case "next_prody":
						this.Prodi = result;
						break;
					}
				});
			}else{
				this.formDataService.getProdi(event.id)
				.subscribe(result => {
					switch(data){
						case "next_prody":
						this.Prodi = result;
						break;
					}
				});
			}
    	}
    }

	CheckValue(main, current){
		if(current){
			$('#input_'+main.name).show();
			this.form.controls[main.name].disable();
			this.form.patchValue({[main.name]: ''});
		}else{
			this.form.controls[main.name].enable();
			$('#input_'+main.name).hide();
			this.form.patchValue({['input_'+main.name]: ''});
		}
	}

	ngAfterViewInit(){
		this.loading = false;
		$(window).keydown(function(event){
			if(event.keyCode == 13) {
			event.preventDefault();
			return false;
			}
		});
		$('#formProgress').attr('style','width:'+100/6+'%');
	}

	toFormGroup(data) {
		let group: any = {};

		data.forEach(result => {
			result.data.forEach(prop =>{
				if(prop.form_type == 'input'){
					prop.values.forEach(propChild => {
						this.listForm.push(propChild);
						if(propChild.child != undefined){
				  			group['input_'+propChild.name] = new FormControl('', Validators.required);
				  			group['child_'+propChild.name] = new FormControl('');
						}

						if(propChild.name == 'm_phone'){
							let phoneRegex = /^(^\+62\s?|^0)(\d{3,4}-?){2}\d{3,4}$/;
							group[propChild.name] = new FormControl('', [Validators.required, Validators.pattern(phoneRegex)]);
						}else if(propChild.name == 'h_phone'){
							let rumah = /0[2-9]{1}[1-9]{1}(|[0-9]{1})[0-9]{6,7}$/;
							group[propChild.name] = new FormControl('', [Validators.required, Validators.pattern(rumah)]);
						}else if(propChild.type == 'email'){
							let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
							group[propChild.name] = new FormControl('', [Validators.required, Validators.pattern(emailRegex)]);
						}else{
							group[propChild.name] = new FormControl('', Validators.required);
						}
					});
				}
			});
		});
		this.form = new FormGroup(group);
	}

	ngOnChanges() {
		this.form.reset();
	}

    ngOnInit(){
		// this.formDataService.getTest().subscribe(res=>{
		// 	console.log(res);
		// });
		
    }

    onSubmit(){
    	Materialize.Toast.removeAll();
    	let valid = [];
    	this.submitted = true;
    	let fControl = this.form.controls;
    	let lForm = this.listForm;
    	lForm.forEach(result =>{
    		let frName = fControl[result.name];
    		if(result.child != undefined){

    			let frChildName = fControl['input_'+result.name];
    			if(frChildName.errors != null && frName.errors != null){
    				for (let childProp in frName.errors){
    					let temp = {
    						status:false,
    						id:'input_'+result.name
    					}
						valid.push(temp);
					}
				}
    		}else{
    			if(frName.errors != null){
					for (let childProp in frName.errors){
						let temp = {
    						status:false,
    						id:result.name
    					}
						valid.push(temp);
					}
	    		}
    		}
    	});

    	if(valid.length > 0){
			Materialize.toast('Harap melengkapi form terlebih dahulu.', 4000);
			console.log(valid[0].id);
    		$('#'+valid[0].id).focus();
    	}else{
			Materialize.toast('Berhasil.', 4000);
			localStorage.setItem('demography', "true");
			this.router.navigateByUrl('/exam/interest');
    	}
    }

	Next(){
    	Materialize.Toast.removeAll();
		let jk = this.sectionCount;
		let jkTarget = jk + 1;
    	let fControl = this.form.controls;
		let arr = [];
		let temp = this.dataForm[this.sectionCount-1].data;
		temp.forEach(res=>{
			res.values.forEach(resChild=>{
				let frName = fControl[resChild.name];
				if(resChild.child != undefined){
					if(fControl['child_'+resChild.name].value == true && fControl['input_'+resChild.name].errors != null){
						this.form.controls['input_'+resChild.name].markAsDirty();
						arr.push('input_'+resChild.name);
					}else if(fControl['child_'+resChild.name].value == false && fControl[resChild.name].errors != null){
						this.form.controls[resChild.name].markAsDirty();
						arr.push(resChild.name);
					}
				}else{
					if(frName.errors != null){
						this.form.controls[resChild.name].markAsDirty();
						arr.push(resChild.name);
					}
				}
			});
		});
		if(arr.length > 0){
			$('#'+arr[0]).focus();
			Materialize.toast('Harap melengkapi form terlebih dahulu.', 4000);
			return false;
		}else{
			if(this.sectionCount == 6){
				$('#demo_btn').trigger('click');
			}else{
				this.formProgress = this.formProgress + (100/6);
				this.formSectionName = this.dataForm[jk].section_name;
				$('#formProgress').attr('style','width:'+this.formProgress+'%');
				$('#section_'+jk).animate({
					opacity: 0,
					marginLeft: '200px'
					}, 'slow', 'linear', function() {
					$(this).hide();
					$('#section_'+jkTarget).removeAttr('style');
					$('#section_'+jkTarget).fadeIn('slow');
				});
				this.sectionCount = jk + 1;
			}
		}
	}

	Back(){
		let jk = this.sectionCount;
		let jkTarget = jk - 1;
		this.formProgress = this.formProgress - (100/6);
		this.formSectionName = this.dataForm[jkTarget-1].section_name;
		$('#formProgress').attr('style','width:'+this.formProgress+'%');
		$('#section_'+jk).animate({
			opacity: 0,
			marginLeft: '-200px'
			}, 'slow', 'linear', function() {
			$(this).hide();
			$('#section_'+jkTarget).removeAttr('style');
			$('#section_'+jkTarget).fadeIn('slow');
		});
		this.sectionCount = jk - 1;
	}
}
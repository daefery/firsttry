import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RequestOptions, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { FormDataService } from './form-data.service'

@Injectable()
export class DemographyFormService {
	results;
	constructor(private http: HttpClient, private formDataService: FormDataService) { 
	}

	getGeneralInfo(){
		return {
			section_name:"Informasi Umum",
			data:[
				{
					form_type:"input",
					values:[
						{
							type:"text",
							name:"full_name",
							label:"Nama Lengkap",
							class:"",
							placeholder:"Masukkan Nama Lengkap"
						},
						{
							type:"select",
							name:"gender",
							label:"Jenis Kelamin",
							class:"",
							options:this.formDataService.getGender(),
							placeholder:"Pilih Jenis Kelamin"
						}
					]
				},
				{
					form_type:"input",
					values:[
						{
							type:"select",
							name:"religion",
							label:"Agama",
							class:"",
							options:this.formDataService.getReligion(),
							placeholder:"Pilih Agama"
						},
						{
							type:"select",
							name:"blood_type",
							label:"Golongan Darah",
							class:"",
							options:this.formDataService.getBloodType(),
							placeholder:"Pilih Golongan Darah"
						}
					]
				},
				{
					form_type:"input",
					values:[
						{
							type:"text",
							name:"birth_place",
							label:"Tempat Lahir",
							class:"",
							placeholder:"Masukkan Tempat Lahir"
						},
						{
							type:"date",
							name:"birthdate",
							label:"Tanggal Lahir",
							class:"",
							placeholder:"Masukkan Tanggal Lahir"
						}
					]
				},
			]
		}
	}

	getContactInfo(){
		return {
			section_name:"Kontak Informasi",
			data:[
				{
					form_type:"input",
					values:[
			    		{
			    			type:"email",
			    			name:"email",
			    			label:"Alamat Email",
			    			class:"",
			    			placeholder:"Masukkan Alamat Email"
			    		},
					]
				},
				{
					form_type:"input",
					values:[
			    		{
			    			type:"text",
			    			name:"h_phone",
			    			label:"Nomor Telepon Rumah",
			    			class:"",
			    			placeholder:"Masukkan Nomor Telepon Rumah"
			    		},
			    		{
			    			type:"text",
			    			name:"m_phone",
			    			label:"Nomor Handphone",
			    			class:"",
			    			placeholder:"Masukkan Nomor Handphone"
			    		},
					]
				},
			]
		}
	}

	getOldDom(province){
		return  {
			section_name:"Domisili Sesuai KTP",
			data:[
				{
					form_type:"input",
					values:[
						{
							type:"textarea",
							name:"old_address",
							label:"Alamat",
							class:"materialize-textarea",
							placeholder:"Masukkan Alamat"
						}
					]
				},
				{
					form_type:"input",
					values:[
						{
							type:"select",
							name:"old_province",
							label:"Propinsi",
							class:"",
							options:province,
							placeholder:"Pilih Propinsi",
							onchange:"old_district"
						},
						{
							type:"select",
							name:"old_district",
							label:"Kabupaten",
							class:"",
							options:[],
							placeholder:"Pilih Kabupaten",
						},
					]
				}
			]
		}
	}

	getNewDom(province){
		return {
			section_name:"Domisili Sekarang",
			data:[
				{
					form_type:"input",
					values:[
						{
							type:"textarea",
							name:"new_address",
							label:"Alamat",
							class:"materialize-textarea",
							placeholder:"Masukkan Alamat"
						}
					]
				},
				{
					form_type:"input",
					values:[
						{
							type:"select",
							name:"new_province",
							label:"Propinsi",
							class:"",
							options:province,
							placeholder:"Pilih Propinsi",
							onchange:"new_district"
						},
						{
							type:"select",
							name:"new_district",
							label:"Kabupaten",
							class:"",
							options:[],
							placeholder:"Pilih Kabupaten"
						},
					]
				},
			]
		}
	}

	getLastEdu(){
		return {
			section_name:"Pendidikan Terakhir",
			data:[
				{
					form_type:"input",
					values:[
			    		{
			    			type:"select",
			    			name:"last_education",
			    			label:"Pendidikan Tertinggi",
			    			class:"",
			    			options:[{id:"SMA/SMK", name:"SMA/SMK"}],
			    			placeholder:"Pilih Pendidikan Tertinggi"
			    		},
					]
				},
				{
					form_type:"input",
					values:[
			    		{
			    			type:"select",
			    			name:"last_school",
			    			label:"Nama Sekolah/Universitas",
			    			class:"",
			    			options:this.formDataService.getSchool(),
			    			placeholder:"Pilih Sekolah / Universitas",
			    			child:{
			    				label:"Sekolah / Universitas anda belum ada?",
			    				placeholder:"Usulkan Sekolah / Universitas"
			    			}
						},
						{
			    			type:"select",
			    			name:"last_prody",
			    			label:"Jurusan / Prodi",
			    			class:"",
			    			options:this.formDataService.getMajors(),
			    			placeholder:"Pilih Jurusan / Prodi",
			    			child:{
			    				label:"Jurusan / Prodi anda belum ada?",
			    				placeholder:"Usulkan Jurusan / Prodi"
			    			}
			    		},
					]
				}
			]
		}
	}

	getNextEdu(data){
		return {
			section_name:"Rencana Pendidikan",
			data:[
				{
					form_type:"input",
					values:[
						{
							type:"select",
							name:"next_education",
							label:"Pendidikan",
							class:"",
							options:this.formDataService.getEducationLevel(),
							placeholder:"Pilih Pendidikan Tertinggi"
						},
						{
							type:"select",
							name:"next_school",
							label:"Nama Sekolah/Universitas",
							class:"",
							options:data.university,
							placeholder:"Pilih Sekolah / Universitas",
							child:{
								label:"Sekolah / Universitas anda belum ada?",
								placeholder:"Usulkan Sekolah / Universitas"
							}
						},
					]
				},
				{
					form_type:"input",
					values:[
						{
							type:"select",
							name:"next_faculty",
							label:"Fakultas",
							class:"",
							options:data.faculty,
							placeholder:"Pilih Fakultas",
							child:{
								label:"Fakultas anda belum ada?",
								placeholder:"Usulkan Fakultas"
							},
							onchange:"next_prody"							
						},
						{
							type:"select",
							name:"next_prody",
							label:"Jurusan / Prodi",
							class:"",
							options:[],
							placeholder:"Pilih Jurusan / Prodi",
							child:{
								label:"Jurusan / Prodi anda belum ada?",
								placeholder:"Usulkan Jurusan / Prodi"
							}
						},
					]
				}
			]
		}
	}
	
    getFormData(){
		// let promise = this.formDataService.getProvince()
        //         .toPromise()
        //         .then((response) => );
		// return promise;
		return [
			// this.getGeneralInfo(),
			// this.getContactInfo(),
			// this.getOldDom(),
			// this.getNewDom(),
			// this.getLastEdu(),
			// this.getNextEdu()
		];
		// let promise = this.formDataService.getProvince()
        //         .toPromise()
        //         .then((response) => this.results = response);
		// console.log(this.results);
		// return promise;
    	// return this.formDataService.getProvince().map(res=>{

		// let generalInfo = {
		// 	section_name:"Informasi Umum",
		// 	data:[
		// 		{
		// 			form_type:"input",
		// 			values:[
		// 	    		{
		// 	    			type:"text",
		// 	    			name:"full_name",
		// 	    			label:"Nama Lengkap",
		// 	    			class:"",
		// 	    			placeholder:"Masukkan Nama Lengkap"
		// 	    		},
		// 	    		{
		// 	    			type:"select",
		// 	    			name:"gender",
		// 	    			label:"Jenis Kelamin",
		// 	    			class:"",
		// 	    			options:this.formDataService.getGender(),
		// 	    			placeholder:"Pilih Jenis Kelamin"
		// 	    		}
		// 			]
		// 		},
		// 		{
		// 			form_type:"input",
		// 			values:[
		// 	    		{
		// 	    			type:"select",
		// 	    			name:"religion",
		// 	    			label:"Agama",
		// 	    			class:"",
		// 	    			options:this.formDataService.getReligion(),
		// 	    			placeholder:"Pilih Agama"
		// 	    		},
		// 	    		{
		// 	    			type:"select",
		// 	    			name:"blood_type",
		// 	    			label:"Golongan Darah",
		// 	    			class:"",
		// 	    			options:this.formDataService.getBloodType(),
		// 	    			placeholder:"Pilih Golongan Darah"
		// 	    		}
		// 			]
		// 		},
		// 		{
		// 			form_type:"input",
		// 			values:[
		// 	    		{
		// 	    			type:"text",
		// 	    			name:"birth_place",
		// 	    			label:"Tempat Lahir",
		// 	    			class:"",
		// 	    			placeholder:"Masukkan Tempat Lahir"
		// 	    		},
		// 	    		{
		// 	    			type:"date",
		// 	    			name:"birthdate",
		// 	    			label:"Tanggal Lahir",
		// 	    			class:"",
		// 	    			placeholder:"Masukkan Tanggal Lahir"
		// 	    		}
		// 			]
		// 		},
		// 	]
		// };

		// let contactInfo = {
		// 	section_name:"Kontak Informasi",
		// 	data:[
		// 		{
		// 			form_type:"input",
		// 			values:[
		// 	    		{
		// 	    			type:"email",
		// 	    			name:"email",
		// 	    			label:"Alamat Email",
		// 	    			class:"",
		// 	    			placeholder:"Masukkan Alamat Email"
		// 	    		},
		// 			]
		// 		},
		// 		{
		// 			form_type:"input",
		// 			values:[
		// 	    		{
		// 	    			type:"text",
		// 	    			name:"h_phone",
		// 	    			label:"Nomor Telepon Rumah",
		// 	    			class:"",
		// 	    			placeholder:"Masukkan Nomor Telepon Rumah"
		// 	    		},
		// 	    		{
		// 	    			type:"text",
		// 	    			name:"m_phone",
		// 	    			label:"Nomor Handphone",
		// 	    			class:"",
		// 	    			placeholder:"Masukkan Nomor Handphone"
		// 	    		},
		// 			]
		// 		},
		// 	]
		// };

		// let oldDom = {
		// 	section_name:"Domisili Sesuai KTP",
		// 	data:[
		// 		{
		// 			form_type:"input",
		// 			values:[
		// 	    		{
		// 	    			type:"textarea",
		// 	    			name:"old_address",
		// 	    			label:"Alamat",
		// 	    			class:"materialize-textarea",
		// 	    			placeholder:"Masukkan Alamat"
		// 	    		}
		// 			]
		// 		},
		// 		{
		// 			form_type:"input",
		// 			values:[
		// 	    		{
		// 	    			type:"select",
		// 	    			name:"old_province",
		// 	    			label:"Propinsi",
		// 	    			class:"",
		// 	    			options:res,
		// 	    			placeholder:"Pilih Propinsi",
		// 	    			onchange:"old_district"
		// 	    		},
		// 	    		{
		// 	    			type:"select",
		// 	    			name:"old_district",
		// 	    			label:"Kabupaten",
		// 	    			class:"",
		// 	    			options:[],
		// 					placeholder:"Pilih Kabupaten",
		// 	    		},
		// 			]
		// 		}
		// 	]
		// };

		// let newDom = {
		// 	section_name:"Domisili Sekarang",
		// 	data:[
		// 		{
		// 			form_type:"input",
		// 			values:[
		// 	    		{
		// 	    			type:"textarea",
		// 	    			name:"new_address",
		// 	    			label:"Alamat",
		// 	    			class:"materialize-textarea",
		// 	    			placeholder:"Masukkan Alamat"
		// 	    		}
		// 			]
		// 		},
		// 		{
		// 			form_type:"input",
		// 			values:[
		// 	    		{
		// 	    			type:"select",
		// 	    			name:"new_province",
		// 	    			label:"Propinsi",
		// 	    			class:"",
		// 	    			options:res,
		// 	    			placeholder:"Pilih Propinsi",
		// 	    			onchange:"new_district"
		// 	    		},
		// 	    		{
		// 	    			type:"select",
		// 	    			name:"new_district",
		// 	    			label:"Kabupaten",
		// 	    			class:"",
		// 	    			options:[],
		// 	    			placeholder:"Pilih Kabupaten"
		// 	    		},
		// 			]
		// 		},
		// 	]
		// };

		// let lastEdu = {
		// 	section_name:"Pendidikan Terakhir",
		// 	data:[
		// 		{
		// 			form_type:"input",
		// 			values:[
		// 	    		{
		// 	    			type:"select",
		// 	    			name:"last_education",
		// 	    			label:"Pendidikan Tertinggi",
		// 	    			class:"",
		// 	    			options:[{id:"SMA/SMK", name:"SMA/SMK"}],
		// 	    			placeholder:"Pilih Pendidikan Tertinggi"
		// 	    		},
		// 	    		{
		// 	    			type:"select",
		// 	    			name:"last_school",
		// 	    			label:"Nama Sekolah/Universitas",
		// 	    			class:"",
		// 	    			options:this.formDataService.getSchool(),
		// 	    			placeholder:"Pilih Sekolah / Universitas",
		// 	    			child:{
		// 	    				label:"Sekolah / Universitas anda belum ada?",
		// 	    				placeholder:"Usulkan Sekolah / Universitas"
		// 	    			}
		// 				},
		// 				{
		// 	    			type:"select",
		// 	    			name:"last_prody",
		// 	    			label:"Jurusan / Prodi",
		// 	    			class:"",
		// 	    			options:this.formDataService.getMajors(),
		// 	    			placeholder:"Pilih Jurusan / Prodi",
		// 	    			child:{
		// 	    				label:"Jurusan / Prodi anda belum ada?",
		// 	    				placeholder:"Usulkan Jurusan / Prodi"
		// 	    			}
		// 	    		},
		// 			]
		// 		},
		// 	]
		// };

		// let nextEdu = {
		// 	section_name:"Rencana Pendidikan",
		// 	data:[
		// 		{
		// 			form_type:"input",
		// 			values:[
		// 	    		{
		// 	    			type:"select",
		// 	    			name:"next_education",
		// 	    			label:"Pendidikan",
		// 	    			class:"",
		// 	    			options:this.formDataService.getEducationLevel(),
		// 	    			placeholder:"Pilih Pendidikan Tertinggi"
		// 	    		},
		// 	    		{
		// 	    			type:"select",
		// 	    			name:"next_school",
		// 	    			label:"Nama Sekolah/Universitas",
		// 	    			class:"",
		// 	    			options:this.formDataService.getGender(),
		// 	    			placeholder:"Pilih Sekolah / Universitas",
		// 	    			child:{
		// 	    				label:"Sekolah / Universitas anda belum ada?",
		// 	    				placeholder:"Usulkan Sekolah / Universitas"
		// 	    			}
		// 	    		},
		// 			]
		// 		},
		// 		{
		// 			form_type:"input",
		// 			values:[
		// 	    		{
		// 	    			type:"select",
		// 	    			name:"next_faculty",
		// 	    			label:"Fakultas",
		// 	    			class:"",
		// 	    			options:this.formDataService.getGender(),
		// 	    			placeholder:"Pilih Fakultas",
		// 	    			child:{
		// 	    				label:"Fakultas anda belum ada?",
		// 	    				placeholder:"Usulkan Fakultas"
		// 	    			}
		// 	    		},
		// 	    		{
		// 	    			type:"select",
		// 	    			name:"next_prody",
		// 	    			label:"Jurusan / Prodi",
		// 	    			class:"",
		// 	    			options:this.formDataService.getGender(),
		// 	    			placeholder:"Pilih Jurusan / Prodi",
		// 	    			child:{
		// 	    				label:"Jurusan / Prodi anda belum ada?",
		// 	    				placeholder:"Usulkan Jurusan / Prodi"
		// 	    			}
		// 	    		},
		// 			]
		// 		}
		// 	]
		// };

    	// 	return [
		// 		generalInfo,
		// 		contactInfo,
		// 		oldDom,
		// 		newDom,
		// 		lastEdu,
		// 		nextEdu
		// 	];
    	// });
    };

}
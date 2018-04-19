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
			    			name:"suku_bangsa",
			    			label:"Suku Bangsa",
			    			class:"",
			    			options:this.formDataService.getSukuBangsa(),
			    			placeholder:"Pilih Suku Bangsa",
			    			child:{
			    				label:"Suku Bangsa tidak ada?",
			    				placeholder:"Suku Bangsa"
			    			}
						},
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
							placeholder:"dd/mm/yyyy"
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
			    			placeholder:"contoh.email@domain.com"
			    		},
					]
				},
				{
					form_type:"input",
					values:[
			    		{
			    			type:"text",
			    			name:"h_phone",
			    			label:"Nomor Telepon Rumah (optional)",
			    			class:"",
			    			placeholder:"021-XXXXXXX"
			    		},
			    		{
			    			type:"text",
			    			name:"m_phone",
			    			label:"Nomor Handphone",
			    			class:"",
			    			placeholder:"+628XXXXXXXXXXX / 081XXXXXXXXX"
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
							label:"Provinsi",
							class:"",
							options:province,
							placeholder:"Pilih Propinsi",
							onchange:"old_district"
						},
						{
							type:"select",
							name:"old_district",
							label:"Kabupaten/Kota",
							class:"",
							options:[],
							placeholder:"Pilih Kabupaten/Kota",
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
							type:"checkbox",
							name:"is_same_address",
							label:"Apakah domisili sekarang sama dengan domisili KTP?",
							class:"",
							placeholder:""
						}
					]
				},
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
							label:"Provinsi",
							class:"",
							options:province,
							placeholder:"Pilih Propinsi",
							onchange:"new_district"
						},
						{
							type:"select",
							name:"new_district",
							label:"Kabupaten/Kota",
							class:"",
							options:[],
							placeholder:"Pilih Kabupaten/Kota"
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
			    			label:"Level Pendidikan Terakhir",
			    			class:"",
			    			options:[{id:"SMA/SMK", name:"SMA/SMK"}],
			    			placeholder:"Pilih Level Pendidikan Terakhir"
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
			    				label:"Sekolah / Universitas anda belum ada dalam daftar?",
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
			    				label:"Jurusan / Prodi anda belum ada dalam daftar?",
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
							type:"collection",
							name:"next_feature_col",
							label:"",
							class:"",
							placeholder:""
						},
					]
				},
				{
					form_type:"input",
					values:[
						{
							type:"select",
							name:"next_education",
							label:"Level Pendidikan",
							class:"",
							options:this.formDataService.getEducationLevel(),
							placeholder:"Pilih level pendidikan yang akan dituju"
						},
						{
							type:"select",
							name:"next_school",
							label:"Nama Sekolah/Universitas",
							class:"",
							options:data.university,
							placeholder:"Pilih Sekolah / Universitas",
							child:{
								label:"Sekolah / Universitas anda belum ada dalam daftar?",
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
							label:"Jurusan",
							class:"",
							options:data.faculty,
							placeholder:"Pilih Jurusan",
							child:{
								label:"Jurusan anda belum ada dalam daftar?",
								placeholder:"Usulkan Jurusan"
							}							
						},
						// {
						// 	type:"select",
						// 	name:"next_prody",
						// 	label:"Jurusan / Prodi",
						// 	class:"",
						// 	options:[],
						// 	placeholder:"Pilih Jurusan / Prodi",
						// 	child:{
						// 		label:"Jurusan / Prodi anda belum ada dalam daftar?",
						// 		placeholder:"Usulkan Jurusan / Prodi"
						// 	}
						// },
					]
				}
			]
		}
	}

}
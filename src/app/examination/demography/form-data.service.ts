import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RequestOptions, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class FormDataService {
	constructor(private http: HttpClient) { }

    /*getProvince(): Observable<any[]> {
        return this.http.get('http://dev.farizdotid.com/api/daerahindonesia/provinsi').map(res => res as any[] || []);
    }*/

    getReligion(){
    	return [
			{id:"ISLAM", name:"ISLAM"},
			{id:"KRISTEN", name:"KRISTEN"},
			{id:"KATHOLIK", name:"KATHOLIK"},
			{id:"HINDU", name:"HINDU"},
			{id:"BUDHA", name:"BUDHA"},
			{id:"KONG HU CHU", name:"KONG HU CHU"},
			{id:"LAINNYA", name:"LAINNYA"},
		];
    }

    getSukuBangsa(){
    	return [
			{id:"Suku Jawa", name:"Suku Jawa"},
			{id:"Suku Sunda", name:"Suku Sunda"},
			{id:"Suku Batak", name:"Suku Batak"},
			{id:"Suku Madura", name:"Suku Madura"},
			{id:"Suku Betawi", name:"Suku Betawi"},
			{id:"Minangkabau", name:"Minangkabau"},
			{id:"Suku Bugis", name:"Suku Bugis"},
			{id:"Suku Melayu", name:"Suku Melayu"},
			{id:"Suku Arab", name:"Suku Arab"},
			{id:"Suku Banten", name:"Suku Banten"},
			{id:"Suku Banjar", name:"Suku Banjar"},
			{id:"Suku Bali", name:"Suku Bali"},
			{id:"Suku Sasak", name:"Suku Sasak"},
			{id:"Suku Dayak", name:"Suku Dayak"},
			{id:"Suku Tionghoa", name:"Suku Tionghoa"},
			{id:"Suku Makassar", name:"Suku Makassar"},
			{id:"Suku Cirebon", name:"Suku Cirebon"}
		];
    }

    getEducationLevel(){
    	return [
			{id:"D3", name:"D3"},
			{id:"D4", name:"D4"},
			{id:"S1", name:"S1"},
			{id:"S2", name:"S2"},
			{id:"S3", name:"S3"}
		];
	}
	
	getMajors(){
		return [
			{id:"IPA", name:"IPA"},
			{id:"IPS", name:"IPS"},
			{id:"Bahasa", name:"Bahasa"}
		]
	}

    getProvince():Observable<any> {
	  return this.http.get('assets/data/province.json').map(res=>{
	  	let dataProv = res['province'];
	  	let result = [];
	  	dataProv.forEach(resProv=>{
	  		let k = {
				id:resProv.id,
	  			name:resProv.nama,
	  		}
	  		result.push(k);
	  	});
	  	return result;
	  });
	}

	getSchool(){
		return [
			{id:"SMA 3 BANDUNG", name:"SMA 3 BANDUNG"},
		]
	}

	getUniversity():Observable<any>{
		return this.http.get('assets/data/university.json').map(res=>{
    		let dataUnv = res['data'];
    		let resultUnv =[];
    		dataUnv.forEach(resUnv=>{
    			let k = {
    				id:resUnv.name,
    				name:resUnv.name
    			}
    			resultUnv.push(k);
    		});
    		return resultUnv;
        });
	}

	getFaculty():Observable<any>{
		return this.http.get('assets/data/faculty.json').map(res=>{
    		let dataFac = res['data'];
    		let resultFac =[];
    		dataFac.forEach(resFac=>{
    			let k = {
    				id:resFac.id,
    				name:resFac.name
    			}
    			resultFac.push(k);
    		});
    		return resultFac;
        });
	}

	getProdi(id):Observable<any>{
		return this.http.get('assets/data/prodi/'+id+'.json').map(res=>{
    		let dataFac = res['data'];
    		let resultFac =[];
    		dataFac.forEach(resFac=>{
    			let k = {
    				id:resFac.id,
    				name:resFac.name
    			}
    			resultFac.push(k);
    		});
    		return resultFac;
        });
	}

    getDistrict(id):Observable<any>{
    	return this.http.get('assets/data/district/'+id+'.json').map(res=>{
    		let dataDist = res['daftar_kecamatan'];
    		let resultDist =[];
    		dataDist.forEach(resDist=>{
    			let k = {
    				id:resDist.id,
    				name:resDist.nama
    			}
    			resultDist.push(k);
    		});
    		return resultDist;
        });
    }

    getGender(){
    	return [
			{id:"LAKI-LAKI", name:"LAKI-LAKI"},
			{id:"PEREMPUAN", name:"PEREMPUAN"},
		]
	}
	
	getTest():Observable<any>{
    	return this.http.get('http://dbfaxtorcoid-via.cloud.revoluz.io:49894/api/Sections').map(res=>res as any);
	}


}
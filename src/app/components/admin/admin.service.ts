import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import {Observable} from 'rxjs';
import { RequestOptions, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { AdminSection } from './admin.model'

@Injectable()
export class AdminService {
	url_api = 'http://localhost:8080/weddings-server/api/v1/section';
	constructor(private http: HttpClient) { }

  	getSection(): Observable<AdminSection[]> {
        return this.http.get(this.url_api).map(res => res as AdminSection[] || []);
    }

  	addSection(data) {
		let headers =  {headers: new  HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded'})};
		let httpParams = new HttpParams()
		.set('name', data.name)
		.set('description', data.description)
		.set('has_generic_answer', data.has_generic_answer)
		.set('time_duration', data.time_duration);
	    
	    return this.http.post(this.url_api, httpParams, headers);
	}

	deleteSection(param:number){
		return this.http.delete(this.url_api+'/'+param);
	}

}
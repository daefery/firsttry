import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class AdminService {
	
	constructor(private http: HttpClient) { }

	getSection() {
		return this.http.get('http://localhost:8080/weddings-server/api/v1/section');
  	}

  	doPOST(data) {
		let headers =  {headers: new  HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded'})};

		let url = 'http://localhost:8080/weddings-server/api/v1/section';
		let httpParams = new HttpParams()
		.set('name', data.name)
		.set('description', data.description)
		.set('has_generic_answer', data.has_generic_answer)
		.set('time_duration', data.time_duration);
	    
	    return this.http.post(url, httpParams, headers);
	}

}
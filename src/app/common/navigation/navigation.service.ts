import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RequestOptions, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class NavigationService {

	urlpath = "http://localhost:63221/api/";
	constructor(private http: HttpClient) { }

	getNav(){
		return this.http.get(this.urlpath+'menu');
	}
}

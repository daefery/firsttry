import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class AdminService {

	constructor(private http: HttpClient) { }

	getSection() {
		return this.http.get('./assets/json/section.json');
  	}
}
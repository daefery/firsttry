import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RequestOptions, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class InterestService {
	constructor(private http: HttpClient) { }

    getSection(): Observable<any> {
        return this.http.get('http://dbfaxtorcoid-via.cloud.revoluz.io:49894/api/Sections').map(res => res as any);
    }

    /*getFormData(){
    	return 
    }*/
}
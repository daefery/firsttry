import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RequestOptions, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class DemographyService {
	constructor(private http: HttpClient) { }

    save(): Observable<any[]> {
        return this.http.get('http://dev.farizdotid.com/api/daerahindonesia/provinsi').map(res => res as any[] || []);
    }

    /*getFormData(){
    	return 
    }*/
}
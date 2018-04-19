import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RequestOptions, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class PersonalityService {
	constructor(private http: HttpClient) { }

    getSection(): Observable<any> {
        return this.http.get('assets/data/sections.json').map(res=>res as any);
    }

    save(data, sectionId):Observable<any>{
        let resultDetails = [];
        data.forEach(res => {
            for (let prop in res) {
                let p = 
                {
                    "questionId": prop,
                    "answerId": res[prop]
                }
                resultDetails.push(p);
            }            
        });
        let store = 
        {
            "result": {
                "accountId": localStorage.getItem('accountId'),
                "sectionId": sectionId,
                "resultDetails": resultDetails
            }
        };
       return this.http.post('secret', store).map(res => res as any[] || []);
    }
}
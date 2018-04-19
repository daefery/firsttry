import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RequestOptions, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class DemographyService {
	constructor(private http: HttpClient) { }

    saveAccount(data, nextEdu): Observable<any[]> {
        let currentCity = data.new_district;
        let currentStreet = data.new_address;
        let currentState = data.new_province;
        let nextEducation = [
            {
                "EducationState": 1,
                "EducationLevel": data.last_education,
                "Institution": data.last_school==undefined?"":data.last_school,
                "Faculty": 0,
                "Major": data.last_prody==undefined?"":data.last_prody,
                "SuggestionInstitution": data.input_last_school,
                "SuggestionFaculty": "",
                "SuggestionMajor": data.input_last_prody
            }
        ];
        if(data.is_same_address){
            currentCity = data.old_district;
            currentStreet = data.old_address;
            currentState = data.old_province;
        }
        if(nextEdu.length > 0){
            nextEdu.forEach(res => {
                let tmp = {
                    "EducationState": 2,
                    "EducationLevel": res.next_education,
                    "Institution": res.next_school,
                    "Faculty": res.next_faculty,
                    "Major": "",
                    "SuggestionInstitution": "",
                    "SuggestionFaculty": "",
                    "SuggestionMajor": ""
                }
                nextEducation.push(tmp);
            });
        }else{
            let tmp = {
                "EducationState": 2,
                "EducationLevel": data.next_education,
                "Institution": data.next_school,
                "Faculty": data.next_faculty,
                "Major": "",
                "SuggestionInstitution": data.input_next_school,
                "SuggestionFaculty": data.input_next_faculty,
                "SuggestionMajor": ""
            }
            nextEducation.push(tmp);
        }
          let store = {
            "Account": {
              "FullName": data.full_name,
              "Gender": data.gender,
              "Religion": data.religion,
              "Ethinc": data.suku_bangsa,
              "BloodType": 1,
              "CityOfBirth": data.birth_place,
              "DateOfBirth": data.birthdate.formatted,
              "email": data.email,
              "homeNumber": data.h_phone,
              "phoneNumber": data.m_phone,
              "Address": {
                "OrignStreet": data.old_address,
                "OriginState": data.old_province,
                "OriginCity": data.old_district,
                "CurrentStreet": currentStreet,
                "CurrentState": currentState,
                "CurrentCity": currentCity
              },
              "Educations": nextEducation
            }
          }
       return this.http.post('secret', store).map(res => res as any[] || []);
    }
}
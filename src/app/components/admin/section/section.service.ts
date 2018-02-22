import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RequestOptions, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Section } from './section.model';
import { Question } from './question.model';

@Injectable()
export class SectionService {
	path_url = 'http://localhost:8080/weddings-server/api/v1/';
	question_url = 'http://localhost:8080/weddings-server/api/v1/question';
	constructor(private http: HttpClient) { }

  	getSection(): Observable<Section[]> {
        return this.http.get(this.path_url+'section').map(res => res as Section[] || []);
    }

    getSectionById(id): Observable<Section> {
        return this.http.get(this.path_url+'section/'+id).map(res => res as Section);
    }

  	addSection(data) {
		let headers =  {headers: new  HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded'})};
		let httpParams = new HttpParams()
		.set('name', data.name)
		.set('description', data.description)
		.set('has_generic_answer', data.has_generic_answer)
		.set('time_duration', data.time_duration);
	    
	    return this.http.post(this.path_url+'section', httpParams, headers);
	}

	deleteSection(param:number){
		return this.http.delete(this.path_url+'section/'+param);
	}

	getQuestionBySectionId(id){
		let headers =  {headers: new  HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded'})};
		let httpParams = new HttpParams()
		.set('section_id', id);
		return this.http.post('http://localhost:8080/weddings-server/api/v1/questionsection', httpParams, headers);
	}

	getQuestionById(id){
		return this.http.get(this.path_url+'question/'+id);
	}

	addQuestion(data, id) {
		let headers =  {headers: new  HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded'})};
		let httpParams = new HttpParams()
		.set('name', data.name)
		.set('grade', data.grade)
		.set('section_id', id);
	    
	    return this.http.post(this.path_url+'question', httpParams, headers);
	}

	deleteQuestion(param:number){
		return this.http.delete(this.path_url+'question/'+param);
	}

	getAnswerByQuestionId(data){
		let headers =  {headers: new  HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded'})};
		let httpParams = new HttpParams()
		.set('section_id', data.section_id)
		.set('question_id', data.question_id);
		return this.http.post('http://localhost:8080/weddings-server/api/v1/answerquestion', httpParams, headers);
	}

	deleteAnswer(param:number){
		return this.http.delete(this.path_url+'answer/'+param);
	}

	addAnswer(data, ids) {
		let headers =  {headers: new  HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded'})};
		let httpParams = new HttpParams()
		.set('name', data.name)
		.set('value', data.value)
		.set('section_id', ids.section_id)
		.set('question_id', ids.question_id);
	    return this.http.post(this.path_url+'answer', httpParams, headers);
	}

}
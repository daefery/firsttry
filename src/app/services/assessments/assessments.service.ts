import { Injectable } from '@angular/core';
import { Assessments } from '@model/assessments/assessments';

@Injectable()
export class AssessmentsService {

public API = 'api_url';
public ass_api = this.API + '/cars';

  constructor() { }

	lowlim:number = 10;
 	uplim:number = 20;
 	getAssessment():Assessments[]{
 		let data = null;
 		let option = [
	  		'Sangat Tidak Sesuai',
	  		'Tidak Sesuai',
	  		'Sesuai',
	  		'Sangat Sesuai',
	  	]; 
		data = [
	  		new Assessments('Q1', 'Saya menyukai pekerjaan yang memiliki banyak aktivitas di lapangan atau luar ruangan.', option),
	  		new Assessments('Q2', 'Saya tidak takut jika harus kotor atau terkena lumpur ketika menjalani pekerjaan saya.', option),
	  		new Assessments('Q3', 'Kegiatan yang membuat saya banyak terpapar sinar matahari lebih meningkatkan semangat saya.', option),
	  		new Assessments('Q4', 'Saya menyukai kegiatan yang memiliki mobilitas tinggi.', option),
			new Assessments('Q5', 'Pekerjaan di belakang meja membuat saya cepat bosan.', option),
			new Assessments('Q6', 'Saya menyukai pekerjaan yang melibatkan penggunaan mesin atau alat.', option),
			new Assessments('Q7', 'Saya senang menciptakan mesin atau alat yang dapat mempermudah pekerjaan manusia.', option),
			new Assessments('Q8', 'Mengutak-atik mesin tidak pernah menjadi sebuah beban bagi saya.', option),
			new Assessments('Q9', 'Saya suka melihat bagaimana cara suatu mesin bekerja.', option),
			new Assessments('Q10', 'Saya senang pekerjaan yang jelas dan bersifat teknis.', option),
	  	];
	  	return data;
  	}

  	getAssessmentV2():any[]{
  		let data = [
	      {id:'Q1', text:'Snakes', icon:'assets/images/assessments/Snakes.jpg'},
	      {id:'Q2', text:'Creative Expression', icon:'assets/images/assessments/Creative Expression.jpg'},
	      {id:'Q1', text:'Maintaining Files', icon:'assets/images/assessments/Maintaining Files.jpg'},
	      {id:'Q1', text:'Working Alone', icon:'assets/images/assessments/Working Alone.jpg'},
	      {id:'Q1', text:'Entrepreneurial', icon:'assets/images/assessments/Entrepreneurial.jpg'}
	    ];
	    return data;
  	}

  	getCustomOption():any[]{
  		let customOpt = [
	      {text:'Sangat Tidak Sesuai', class:'red darken-2'},
	      {text:'Tidak Sesuai', class:'orange darken-2'},
	      {text:'Sesuai', class:'light-green darken-2'},
	      {text:'Sangat Sesuai', class:'green darken-2'},
	    ];

	    return customOpt;
  	}
}

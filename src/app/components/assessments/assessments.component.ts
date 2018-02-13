import { Component, OnInit } from '@angular/core';
import { Assessments } from '../../models/assessments/assessments';

@Component({
  selector: 'app-assessments',
  templateUrl: './assessments.component.html',
  styleUrls: ['./assessments.component.css']
})
export class AssessmentsComponent implements OnInit {
  questions: Assessments[];

  constructor() { 
  	let option = [
  		'Sangat Tidak Sesuai',
  		'Tidak Sesuai',
  		'Sesuai',
  		'Sangat Sesuai',
  	]
  	this.questions = [
  		new Assessments('Q1', 'Saya menyukai pekerjaan yang memiliki banyak aktivitas di lapangan atau luar ruangan.', option),
  		new Assessments('Q2', 'Saya tidak takut jika harus kotor atau terkena lumpur ketika menjalani pekerjaan saya.', option),
  		new Assessments('Q3', 'Kegiatan yang membuat saya banyak terpapar sinar matahari lebih meningkatkan semangat saya.', option),
  		new Assessments('Q4', 'Saya menyukai kegiatan yang memiliki mobilitas tinggi.', option),
  		new Assessments('Q5', 'Pekerjaan di belakang meja membuat saya cepat bosan.', option),
  	];
  	console.log(this.questions);
  }

  ngOnInit() {
  	$(document).ready(function(){
  		$('#qs_0').fadeIn('slow');
    	$('.collapsible').collapsible('open', 0);
  	});
  }

  public myEvent(event, root) {
  
  	$('#'+root).fadeOut( "slow", function() {
  		$('#'+event).fadeIn("slow", function(){
    		Materialize.showStaggeredList('#'+event);
  		});
  	});
  	console.log(event);
  	console.log(root);
  }
}

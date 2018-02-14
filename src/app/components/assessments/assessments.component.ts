import { Component, OnInit } from '@angular/core';
import { Assessments } from '../../models/assessments/assessments';
import { ActivatedRoute } from '@angular/router';

declare var $, Materialize, moment:any;
@Component({
  selector: 'app-assessments',
  templateUrl: './assessments.component.html',
  styleUrls: ['./assessments.component.css']
})
export class AssessmentsComponent implements OnInit {
  questions: Assessments[];
  customOption:any[];
  total_qs:number;
  id:string;
  constructor(private router: ActivatedRoute) { 
    this.customOption = [
      {text:'Sangat Tidak Sesuai', class:'red darken-2'},
      {text:'Tidak Sesuai', class:'orange darken-2'},
      {text:'Sesuai', class:'light-green darken-2'},
      {text:'Sangat Sesuai', class:'green darken-2'},
    ];

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
      new Assessments('Q6', 'Saya menyukai pekerjaan yang melibatkan penggunaan mesin atau alat.', option),
      new Assessments('Q7', 'Saya senang menciptakan mesin atau alat yang dapat mempermudah pekerjaan manusia.', option),
      new Assessments('Q8', 'Mengutak-atik mesin tidak pernah menjadi sebuah beban bagi saya.', option),
      new Assessments('Q9', 'Saya suka melihat bagaimana cara suatu mesin bekerja.', option),
  		new Assessments('Q10', 'Saya senang pekerjaan yang jelas dan bersifat teknis.', option),
  	];
    this.total_qs = this.questions.length;
  }

  ngOnInit() {
  	this.id = this.router.snapshot.params.id;
  	console.log('id:'+this.id);
  	$(document).ready(function(){
      $('.carousel.carousel-slider').carousel({fullWidth: true});
  	  $('#qs_0').fadeIn('slow');
      var functionInterval = null;
      var duration = moment.duration((5*60)*1000, 'milliseconds');
      var interval = 10;
      functionInterval = setInterval(processTimer,10);

      function processTimer(){
        duration = moment.duration(duration - interval, 'milliseconds');
        var second = duration.seconds();
        var hours = duration.hours();
        var minutes = duration.minutes();
        $('.countdown').text(duration.hours() + ":" + duration.minutes() + ":" + duration.seconds());
        if(second == 0 && hours == 0 && minutes == 0){
			$('#pembungkus').remove();
			$('#progress').remove();
			$('#timeout_message').fadeIn('slow');
			clearInterval(functionInterval);
        }else{
          var ckl = $('#thanks_message').attr('style');
          if(ckl == undefined){
            clearInterval(functionInterval);
          }
        }
      }
    });
  }

  public progressEvent(event, root, lengthRoot, totalRoot) {
    var tot = 100/totalRoot;
  	$('#'+root).fadeOut( "slow", function() {
      $('#determinate').attr('style', 'width:'+lengthRoot*tot+'%');
      $('#progress_count').text(lengthRoot+'/'+totalRoot);

      if(lengthRoot == totalRoot){
        $('.countdown').remove();
        $('#progress_count').text('Completed.');
        setTimeout(function(){
  			$('#pembungkus').remove();
          	$('#progress').hide();
          	$('#thanks_message').removeAttr('style');
        }, 2000);
      }else{
        $('#'+event).removeAttr('style');
        Materialize.fadeInImage('#'+event);
      }
  	});
  }
}

import { Component, OnInit } from '@angular/core';
import { Assessments } from './assessments.model';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { AssessmentsService } from './assessments.service';

declare var $, Materialize, moment:any;
@Component({
  selector: 'app-assessments',
  templateUrl: './assessments.component.html',
  styleUrls: ['./assessments.component.css']
})
export class AssessmentsComponent implements OnInit {
  questions: Assessments[];
  customOption:any[];
  questionsv2:any[];
  total_qs:number;
  id:string;
  back_image:any;
  v2name:string;
  constructor(private router: ActivatedRoute, private _sanitizer: DomSanitizer, private assessmentService: AssessmentsService) { 
    this.customOption = this.assessmentService.getCustomOption();
  	this.questions = this.assessmentService.getAssessment();
    this.questionsv2 = this.assessmentService.getAssessmentV2();
    this.back_image = this._sanitizer.bypassSecurityTrustStyle('url('+this.questionsv2[0].icon+')');
    this.v2name = this.questionsv2[0].text;
    this.total_qs = this.questions.length;
    this.id = this.router.snapshot.params.id;
  }

  ngOnInit() {
  	$(document).ready(function(){
      $('.carousel.carousel-slider').carousel({fullWidth: true});
      $('#qs_0').fadeIn('slow');
  	  $('#qs2_0').fadeIn('slow');
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

  public progressEventV2(event, root, lengthRoot, totalRoot){
    var tot = 100/totalRoot;
    var qsData = this.questionsv2[lengthRoot];
    $('#'+root).fadeOut( "slow", function() {
      $('#determinate_v2').attr('style', 'width:'+lengthRoot*tot+'%');
      if(lengthRoot == totalRoot){
        $('#progress_count').text('Completed.');
        setTimeout(function(){
        $('#pembungkusv2').remove();
            $('#thanks_message_v2').removeAttr('style');
        }, 2000);
      }else{
        $('#progress_count').text(qsData.text);
        $('#card_panel_v2').animate({
          opacity: 0.5
        }, 'fast', function () {
            $('#card_panel_v2')
                .css({
                'background-image': 'url("'+qsData.icon+'")'
            })
                .animate({
                opacity: 1
            });
        });
        $('#'+event).removeAttr('style');
        Materialize.fadeInImage('#'+event);

      }
    });
  }

}

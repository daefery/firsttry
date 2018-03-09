import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CognitiveService } from './cognitive.service';
declare var $,Materialize,moment:any;

@Component({
    templateUrl:'./cognitive.component.html',
    styles:[`
    .progress{
        height: 60px;
        background-color: #b1dcfb;
    }
    .progress .determinate{
        background-color: #2c67ca;
    }
    .progress-text{
        position: relative;
        color:#fff
    }
    `]
})
 
export class CognitiveComponent implements OnInit, AfterViewInit { 
    
    dataSection=[];
    currentDataSection;
    currentDataSectionIndex=0;
    sectionCount = 1;
    processDone;
    sectionName;
    formProgress;
    constructor(private _cognitiveService:CognitiveService) { 
        // _cognitiveService.getSection().subscribe(res=>{
        //     this.dataSection = res.sections;
        //     console.log(this.dataSection);
        // });
        this.dataSection = _cognitiveService.getSection().sections;
        this.currentDataSection = this.dataSection[this.currentDataSectionIndex];
        this.processDone = this.currentDataSection.questions.length;
        this.sectionName = this.currentDataSection.name;
        this.formProgress = 100/this.processDone;
    } 
    
    changeSection(){
		$('#formProgress').attr('style','width:'+100/this.processDone+'%');
        this.sectionCount = 1;
        this.currentDataSectionIndex = this.currentDataSectionIndex + 1;
        this.currentDataSection = this.dataSection[this.currentDataSectionIndex];
        this.processDone = this.currentDataSection.questions.length;
        this.sectionName = this.currentDataSection.name;
    }
    
    ngOnInit() {
    }

    ngAfterViewInit() {
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
                clearInterval(functionInterval);
            }else{
                //clearInterval(functionInterval);
            }
        }
		$('#formProgress').attr('style','width:'+100/this.processDone+'%');
    }

    Next(){
        let jk = this.sectionCount;
        let jkTarget = jk + 1;
        let progress = this.formProgress + (100/this.processDone);
        $('#question_'+jk).animate({
            opacity: 0,
            marginLeft: '200px'
            }, 'slow', 'linear', function() {
            $(this).hide();
            $('#question_'+jkTarget).removeAttr('style');
            $('#question_'+jkTarget).fadeIn('slow');
    		$('#formProgress').attr('style','width:'+progress+'%');
        });
        this.sectionCount = this.sectionCount + 1;
    }

    Done(){
        this.changeSection();
    }
  
}
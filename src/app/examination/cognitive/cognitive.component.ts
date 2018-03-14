import { Component, OnInit, AfterViewInit, OnDestroy, OnChanges } from '@angular/core';
import { CognitiveService } from './cognitive.service';
import { ActivatedRoute, Router } from '@angular/router';

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
 
export class CognitiveComponent implements OnInit, AfterViewInit, OnDestroy { 
    sectionDataCount;
    ResetTime = 1;
    currentDataSection;
    sectionCount = 1;
    sectionProgress = 1;
    processDone;
    sectionName;
    formProgress;
    isIntroShow = false;
    IntroSection;
    private sub: any;
    currentId:number;
    sectionToFinish = 0;
    constructor(private _cognitiveService:CognitiveService, private activeRoute: ActivatedRoute, private router:Router) { 
        // _cognitiveService.getSection().subscribe(res=>{
        //     this.dataSection = res.sections;
        //     console.log(this.dataSection);
        // });
        // this.dataSection = _cognitiveService.getSection().sections;
        // this.currentDataSection = this.dataSection[this.currentDataSectionIndex];
        // this.processDone = this.currentDataSection.questions.length;
        // this.sectionName = this.currentDataSection.name;
        // this.formProgress = 100/this.processDone;
    } 
    
    ngOnInit() {
        let p = localStorage.getItem('cognitive-demo');
        if(p == null){
                this.router.navigateByUrl('/forbidden');
        }
        this.sub = this.activeRoute.params.subscribe(params => {
            this.currentId = +params['id'] - 1;
            if(!isNaN(this.currentId)){
                this.sectionProgress = 1;
                this.currentDataSection = this._cognitiveService.getSection().sections[this.currentId];
                this.sectionDataCount = this._cognitiveService.getSection().sections.length;
                this.sectionName = this.currentDataSection.name;
                this.IntroSection = `This is the tutorial for <b>`+this.sectionName+`</b>.`;
                this.processDone = this.currentDataSection.questions.length;
                this.formProgress = 100/this.processDone;
                this.isIntroShow = true;
                if(!this.isIntroShow){
                    this.setTimer(this.currentDataSection.timeDuration);
                }
            }else{
                this.router.navigateByUrl('/not-found');
            }
         });
    }

    setTimer(dur){
        let d = dur;
        let kl = this.currentId;
        let prog = this.formProgress;
        $( document ).ready(function() {
            $('#formProgress').attr('style','width:'+prog+'%');
            $('#countdown').html('');
            var functionInterval = null;
            var duration = null;
            duration = moment.duration((d*60)*1000, 'milliseconds');
            functionInterval = setInterval(processTimer,10);
            $('#countdown').append('<h4 class="countdown_'+kl+' red-text" style="float: right">00:00:00</h4>');
            function processTimer(){
                duration = moment.duration(duration - 10, 'milliseconds');
                var second = duration.seconds();
                var hours = duration.hours();
                var minutes = duration.minutes();
                $('.countdown_'+kl).text(duration.hours() + ":" + duration.minutes() + ":" + duration.seconds());
                if(second == 0 && hours == 0 && minutes == 0){
                    $('#selesai').trigger('click');
                    clearInterval(functionInterval);
                }
            }
        });
    }

    ngAfterViewInit() {
        
    }

    Next(){
        let jk = this.sectionProgress;
        let jkTarget = jk + 1;
        let progress = this.formProgress + (100/this.processDone);
        $('#formProgress').attr('style','width:'+progress+'%');
        $('#question_'+jk).animate({
            opacity: 0,
            marginLeft: '200px'
            }, 'slow', 'linear', function() {
            $(this).hide();
            $('#question_'+jkTarget).removeAttr('style');
            $('#question_'+jkTarget).fadeIn('slow');
        });
        this.sectionProgress++;
    }

    Done(){
        this.sectionCount++;
        this.sectionToFinish++;

        if(this.sectionToFinish == this.sectionDataCount){
            Materialize.toast('Berhasil!', 4000);
            localStorage.setItem('cognitive', "true");
            this.router.navigateByUrl('/exam/personality');
        }else{
            this.isIntroShow = true;
            this.router.navigateByUrl('/exam/cognitive/'+this.sectionCount);
        }
    }

    Start(){
        this.isIntroShow = false;
        let prop = this.formProgress;

        if(!this.isIntroShow){
            this.router.navigateByUrl('/exam/cognitive/'+this.sectionCount);
            this.setTimer(this.currentDataSection.timeDuration);
        }
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }
  
}
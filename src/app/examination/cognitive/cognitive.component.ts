import { Component, OnInit, AfterViewInit, OnDestroy, OnChanges } from '@angular/core';
import { CognitiveService } from './cognitive.service';
import { ActivatedRoute, Router } from '@angular/router';
import {NgForm} from '@angular/forms';

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
    pagination;
    Duration;
    resultSection;
	isLoading = false;
    constructor(private _cognitiveService:CognitiveService, private activeRoute: ActivatedRoute, private router:Router) { 
    } 
    
    ngOnInit() {
        let history = localStorage.getItem("history") != null?JSON.parse(localStorage.getItem("history")):null;
        if(history!=null){
            localStorage.setItem(history.session, 'true');
            localStorage.setItem('accountId', history.accountId);
        }
        let p = localStorage.getItem('cognitive-demo');
        let accountid = localStorage.getItem('accountId');
        if(p == null || accountid == null){
            this.router.navigateByUrl('/forbidden');
        }
        this.isLoading = true;
        this.sub = this.activeRoute.params.subscribe(params => {
            this.pagination = [];
            this.currentId = +params['id'] - 1;
            if(!isNaN(this.currentId)){
                this.sectionCount = +params['id'];
                this.sectionProgress = 1;
                this._cognitiveService.getSection().subscribe(res=>{
                    let onlyCognitiveSection = res.sections.slice(0, 4);
                    this.currentDataSection = onlyCognitiveSection[this.currentId];
                    this.sectionDataCount = onlyCognitiveSection.length;
                    this.sectionToFinish = +params['id'];
                    this.sectionName = this.currentDataSection.name;
                    this.Duration = this.currentDataSection.timeDuration;
                    this.IntroSection = this._cognitiveService.getSectionIntro(+params['id']);
                    this.processDone = this.currentDataSection.questions.length;
                    this.formProgress = 100/this.processDone;
                    this.isIntroShow = true;
                    for (let index = 0; index < this.processDone; index++) {
                        this.pagination.push('');
                    }
                    if(!this.isIntroShow){
                        this.setTimer(this.currentDataSection.timeDuration);
                    }
                    this.isLoading = false;
                });
                
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
            duration = moment.duration((1*60)*1000, 'milliseconds');
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
            $('html, body').animate({ scrollTop: 0 }, 'slow');               
        });
        this.formProgress = progress;
        this.sectionProgress++;
    }

    Done(){
        this.isLoading = true;
        this.sectionCount++;
        $('#btn-submit').trigger('click');
        if(this.sectionToFinish == this.sectionDataCount){
            this._cognitiveService.save(this.resultSection, this.currentDataSection.sectionId).subscribe(res=>{
                this.isLoading = false;
                if(res.resultId != '00000000-0000-0000-0000-000000000000'){
                    Materialize.toast('Kognitif Tes Berhasil disimpan.', 4000);
                    localStorage.setItem('cognitive', "true");
                    this.setLocalStorage('/exam/interest', 'cognitive');
                    this.router.navigateByUrl('/exam/interest');
                }else{
					Materialize.toast('Gagal Menyimpan Data!', 4000);
                }
            });
        }else{
            this._cognitiveService.save(this.resultSection, this.currentDataSection.sectionId).subscribe(res=>{
                this.isLoading = false;
                if(res.resultId != '00000000-0000-0000-0000-000000000000'){
                    Materialize.toast('Anda Berhasil Melewati &nbsp;<b>'+this.sectionName+'</b>', 4000);
                    this.isIntroShow = true;
                    this.setLocalStorage('/exam/cognitive/'+this.sectionCount, 'cognitive-demo');
                    this.router.navigateByUrl('/exam/cognitive/'+this.sectionCount);
                }else{
					Materialize.toast('Gagal Menyimpan Data!', 4000);
                }
            });
        }
        this.sectionToFinish++;
    }

    Start(){
        this.isIntroShow = false;
        let prop = this.formProgress;

        if(!this.isIntroShow){
            this.router.navigateByUrl('/exam/cognitive/'+this.sectionCount);
            this.setTimer(this.currentDataSection.timeDuration);
            $('html, body').animate({ scrollTop: 0 }, 'slow');               
        }
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    goToPage(id){
        let jk = this.sectionProgress;
        let jkTarget = id;
        let progress = id*(100/this.processDone);
        
        $('#formProgress').attr('style','width:'+progress+'%');
        $('#question_'+jk).animate({
            opacity: 0,
            marginLeft: '200px'
            }, 'slow', 'linear', function() {
            $(this).hide();
            $('#question_'+jkTarget).removeAttr('style');
            $('#question_'+jkTarget).fadeIn('slow');
        });
        this.formProgress = progress;
        this.sectionProgress = id;
    }
    onSubmit(f: NgForm) {
        this.resultSection = f.value;
    }

    setLocalStorage(url, session){
        let historyOld = localStorage.getItem("history") != null?JSON.parse(localStorage.getItem("history")):null;
        let history = {
            "email":historyOld.email,
            "accountId":historyOld.accountId,
            "last_url":url,
            "session":session,
            "data":[]
        };
        localStorage.setItem("history", JSON.stringify(history));
    }
  
}
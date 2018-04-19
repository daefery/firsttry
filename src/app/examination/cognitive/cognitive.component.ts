import { Component, OnInit, AfterViewInit, OnDestroy, OnChanges } from '@angular/core';
import { CognitiveService } from './cognitive.service';
import { ActivatedRoute, Router } from '@angular/router';
import {NgForm} from '@angular/forms';

declare var $,Materialize,moment:any;

@Component({
    templateUrl:'./cognitive.component.html',
    styles:[`
    .progress{
        height: 30px;
        background-color: #b1dcfb;
        margin: -2rem 0 1rem 0;
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
    isIntro = false;
    timeOut = false;
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
        this.sub = this.activeRoute.params.subscribe(params => {
            this.isLoading = true;
            this.pagination = [];
            this.currentId = +params['id'] - 1;
            if(!isNaN(this.currentId)){
            this.isIntro = false;
                this.sectionCount = +params['id'];
                this.sectionProgress = 1;
                this._cognitiveService.getSection().subscribe(res=>{
                    let onlyCognitiveSection = res.sections.slice(0, 4);
                    if(this.currentId == 0){
                        let currProp = onlyCognitiveSection[this.currentId];
                        let qsProp = [];
                        let idx = 1;
                        currProp.questions.forEach(res => {
                            let splt = res.name.split(';');
                            let pQs = {
                                "questionId": res.questionId,
                                "name": idx +'.&nbsp;&nbsp;'+ splt[0]+'<b>&#58;&#58;</b>'+splt[1]+'&nbsp;<b>:</b>&nbsp;'+splt[2]+'<b>&#58;&#58;</b>'+splt[3]+'?',
                                "grade": res.grade,
                                "type": res.type,
                                "answers": res.answers
                            }
                            qsProp.push(pQs);
                            idx++;
                        });
                        let prp = {
                            "sectionId": currProp.sectionId,
                            "name": currProp.name,
                            "hasGenericAnswer": currProp.hasGenericAnswer,
                            "description": currProp.description,
                            "timeDuration": currProp.timeDuration,
                            "answer":currProp.answer,
                            "questions":qsProp
                        }
                        this.currentDataSection = prp;
                    }else{
                        this.currentDataSection = onlyCognitiveSection[this.currentId];
                    }

                    this.sectionDataCount = onlyCognitiveSection.length;
                    this.sectionToFinish = +params['id'];
                    this.sectionName = this.currentDataSection.name;
                    this.Duration = this.currentDataSection.timeDuration;
                    this.IntroSection = this._cognitiveService.getSectionIntro(+params['id']);
                    this.processDone = this.currentDataSection.questions.length;
                    this.formProgress = 100/this.processDone;
                    this.isIntroShow = true;
                    for (let index = 0; index < this.processDone; index++) {
                        let qp = this.currentDataSection.questions[index].questionId;
                        let dt = {
                            id:qp,
                            status:false
                        }
                        this.pagination.push(dt);
                    }
                    if(!this.isIntroShow){
                        this.setTimer(this.currentDataSection.timeDuration);
                    }
                    this.isLoading = false;
                });
                
            } else if(params['id'] == 'intro'){
                this.isIntro = true;
                this.isLoading = false;
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
            $('.modal').modal();
            $('#formProgress').attr('style','width:'+prog+'%');
            $('#countdown').html('');
            var $clock = $('#countdown');
            var eventTime = moment().add(d, 'minutes').unix();
            var currentTime = moment().unix();
            var diffTime = eventTime - currentTime;
            var duration = moment.duration((diffTime) * 1000, 'milliseconds');
            var interval = 100;
            var taskInterval = null;

            // if time to countdown
            if(diffTime > 0) {
                var $fullTime = $('<h4 class="countdown_'+kl+' red-text" style="float: right"></h4>').appendTo($clock);
                taskInterval = setInterval(timerProcess, interval);
            }

            function timerProcess(){
                duration = moment.duration(duration.asMilliseconds() - interval, 'milliseconds');
                var d = moment.duration(duration).days(),
                    h = moment.duration(duration).hours(),
                    m = moment.duration(duration).minutes(),
                    s = moment.duration(duration).seconds();

                if(d == 0 && h == 0 && m == 0 && s == 0){
                    this.timeOut = true;
                    $('#selesai').trigger('click');
                    clearInterval(taskInterval);
                }
                
                d = $.trim(d).length === 1 ? '0' + d : d;
                h = $.trim(h).length === 1 ? '0' + h : h;
                m = $.trim(m).length === 1 ? '0' + m : m;
                s = $.trim(s).length === 1 ? '0' + s : s;

                $fullTime.text(h+':'+m+':'+s);
            }
        });
    }

    ngAfterViewInit() {
    }

    Next(){
        $('#btn-next').addClass('not-active');
        $('#btn-back').addClass('not-active');
        $('#btn-page a').addClass('not-active');
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
            $('#btn-next').removeClass('not-active');
            $('#btn-back').removeClass('not-active');
            $('#btn-page a').removeClass();
        });
        
        this.formProgress = progress;
        this.sectionProgress++;
    }

    Back(){
        $('#btn-next').addClass('not-active');
        $('#btn-back').addClass('not-active');
        $('#btn-page a').addClass('not-active');
        let jk = this.sectionProgress;
        let jkTarget = jk - 1;
        let progress = this.formProgress - (100/this.processDone);
        $('#formProgress').attr('style','width:'+progress+'%');
        $('#question_'+jk).animate({
            opacity: 0,
            marginLeft: '200px'
            }, 'slow', 'linear', function() {
            $(this).hide();
            $('#question_'+jkTarget).removeAttr('style');
            $('#question_'+jkTarget).fadeIn('slow');
            $('html, body').animate({ scrollTop: 0 }, 'slow');               
            $('#btn-next').removeClass('not-active');
            $('#btn-back').removeClass('not-active');
            $('#btn-page a').removeClass();
        });
        this.formProgress = progress;
        this.sectionProgress--;
    }

    Done(param){
        if(param){
            this.timeOut = true;
        }else{
            this.timeOut = false;
        }

        if(!this.timeOut){
            $('#cogmodal').modal('open');
            return false;
        }else{
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
        $('#btn-next').addClass('not-active');
        $('#btn-back').addClass('not-active');
        $('#btn-page a').addClass('not-active');
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
            $('#btn-next').removeClass('not-active');
            $('#btn-back').removeClass('not-active');
            $('#btn-page a').removeClass();
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
    
    setDone(type){
        this.pagination[this.sectionProgress-1].status = true;
    }
}
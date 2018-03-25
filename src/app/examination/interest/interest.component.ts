import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { InterestService } from './interest.service';
import { ActivatedRoute, Router } from '@angular/router';
import {NgForm} from '@angular/forms';
declare var $,Materialize:any;
@Component({
    templateUrl:'./interest.component.html',
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
 
export class InterestComponent implements OnInit, OnDestroy { 
    dataSection;
    dataQuestion;
    dataQuestionCount;
    initProgress;
    currentId:number;
    sub:any;
    currentNumber;
    pageNumber = 1;
    totalQuestion;
    currentTotalQuestion;
    isValidForm = false;
    isIntroShow = false;
    IntroSection;
    isLoading = false;
    Part;
    resultSection=[];
    constructor(private interestService : InterestService, private activeRoute: ActivatedRoute, private router:Router) { 
    }  
    ngOnInit() {
        this.isLoading = true;
        let history = localStorage.getItem("history") != null?JSON.parse(localStorage.getItem("history")):null;
        if(history!=null){
            localStorage.setItem(history.session, 'true');
            localStorage.setItem('accountId', history.accountId);
            this.resultSection = history.data;
        }
        let p = localStorage.getItem('interest-demo');
        let accountid = localStorage.getItem('accountId');
        if(p == null || accountid == null){
                this.router.navigateByUrl('/forbidden');
        }
        this.sub = this.activeRoute.params.subscribe(params => {
            this.Part = +params['part']
            this.currentId = +params['id'] - 1;
            if(this.currentId == 0)this.isIntroShow = true;
            if(!isNaN(this.currentId)){

                this.isValidForm = false;
                this.pageNumber = +params['id'];
                this.dataSection = this.interestService.getSection().subscribe(res=>{
                    if(this.Part == 1){
                        this.dataSection = res.sections[4];
                    }else{
                        this.dataSection = res.sections[5];
                    }
                    this.totalQuestion = this.dataSection.questions.length;
                    let c = this.dataSection.questions.length/10;
                    this.IntroSection = this.interestService.getSectionIntro(this.Part);
                    if(!Number.isInteger(c)){
                        let sd = c.toString();
                        let k = sd.split('.');
                        c = +k[0]+1;
                    }
                    
                    this.dataQuestionCount = c;
                    let from = this.currentId * 10;
                    let to = (this.currentId+1) * 10;
                    this.dataQuestion = this.dataSection.questions.slice(from, to);
                    this.currentTotalQuestion = this.dataQuestion.length < 10 ? this.dataSection.questions.length:(this.currentId+1)*this.dataQuestion.length;
                    this.currentNumber = from;
                    this.initProgress = 100/this.dataQuestionCount;
                    let prog = (this.currentId + 1)*this.initProgress;
                    $(document).ready(function(){
                        $('#formProgress').attr('style','width:'+prog+'%');
                    });
                    this.isLoading = false;
                });
                
            }else{
                this.router.navigateByUrl('/not-found');
            }
        });
        
    }

    ngOnDestroy(): void {
        this.sub.unsubscribe();
    }

    Start(){
        this.isIntroShow = false;
        let prog = this.initProgress;        
        $(document).ready(function(){
            $('#formProgress').attr('style','width:'+prog+'%');
            $("html, body").animate({ scrollTop: 0 }, "slow");
        });
    }

    Next(){
        this.removeToast();
        $('#btn-submit').trigger('click');
        if(this.isValidForm){
            this.pageNumber++;
            this.setLocalStorage('/exam/interest/'+this.Part+'/'+this.pageNumber, 'interest-demo');
            this.router.navigateByUrl('/exam/interest/'+this.Part+'/'+this.pageNumber);        
            $('html, body').animate({ scrollTop: 0 }, 'slow');
        }else{
            Materialize.toast('Harap melengkapi jawaban anda!', 4000);
        }

    }
    Done(){
        this.removeToast();
        $('#btn-submit').trigger('click');
        this.isLoading = true;
        if(this.isValidForm){
            if(this.Part == 2){
                this.interestService.save(this.resultSection, this.dataSection.sectionId).subscribe(res=>{
                    this.isLoading = false;
                    if(res.resultId != '00000000-0000-0000-0000-000000000000'){
                        this.resultSection = [];
                        Materialize.toast('Minat Tes Berhasil Disimpan', 4000);
                        localStorage.setItem('interest', "true");
                        this.setLocalStorage('/exam/personality', 'interest');
                        this.router.navigateByUrl('/exam/personality');
                    }else{
					Materialize.toast('Gagal Menyimpan Data!', 4000);
                    }
                });
            }else{
                this.interestService.save(this.resultSection, this.dataSection.sectionId).subscribe(res=>{
                    this.isLoading = false;
                    if(res.resultId != '00000000-0000-0000-0000-000000000000'){
                        this.resultSection = [];
                        this.Part++;
                        this.pageNumber = 1;
                        Materialize.toast('Anda Telah Menyelesaikan Tes Minat Bagian 1', 4000);
                        this.setLocalStorage('/exam/interest/'+this.Part+'/'+this.pageNumber, 'interest-demo');
                        this.router.navigateByUrl('/exam/interest/'+this.Part+'/'+this.pageNumber);        
                    }else{
					Materialize.toast('Gagal Menyimpan Data!', 4000);
                    }
                });
            }
        
        }else{
            this.isLoading = false;
            Materialize.toast('Harap melengkapi jawaban anda!', 4000);
        }
    }
    // Back(){
    //     this.pageNumber--;
    //     let prog = this.currentProgress - this.initProgress;
    //     this.setProgressBar(prog);
    //     this.currentProgress = prog;
    //     this.router.navigateByUrl('/exam/interest/'+this.pageNumber);        
    // }
    onSubmit(f: NgForm) {
        let index=[];
        for (let prop in f.value) {
            let cls = $('#'+prop+' input');
            if(!f.valid){
                $('#lbl-'+prop).remove();
                let vl = cls.attr('class');
            if(vl.includes('ng-invalid')){
                    index.push(prop);
                    $('#'+prop).append('<span class="red-text text-darken-2" id="lbl-'+prop+'">pilih jawaban terlebih dahulu.</span>');
                }else{
                    $('#lbl-'+prop).remove();
                }
            }else{
                $('#lbl-'+prop).remove();
                this.isValidForm = true;
            }
        }
        if(index.length >0 ){
            $('#'+index[0]+' input').focus();
        }else{
            this.resultSection.push(f.value);
        }
      }

      removeToast(){
		var toastElement = $('.toast').first()[0];
		if(toastElement != undefined || toastElement != null){
			var toastInstance = toastElement.M_Toast;
			toastInstance.remove();
		}
    }
    
    setLocalStorage(url, session){
        let historyOld = localStorage.getItem("history") != null?JSON.parse(localStorage.getItem("history")):null;
        let history = {
            "email":historyOld.email,
            "accountId":historyOld.accountId,
            "last_url":url,
            "session":session,
            "data":this.resultSection
        };
        localStorage.setItem("history", JSON.stringify(history));
    }
}
import { Component, OnInit, OnDestroy } from '@angular/core';
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
    expQs=[];
    isLoading = false;
    constructor(private interestService : InterestService, private activeRoute: ActivatedRoute, private router:Router) { 
        for (let index = 0; index < 7; index++) {
            this.expQs.push("");
        }
        // this.dataSection = this.interestService.getSection().subscribe(res=>{
        //     this.dataSection = res[1];
        // });
        // this.dataSection = interestService.getSection();
        // console.log(this.dataSection);
    }  
    ngOnInit() {
        this.isLoading = true;
    // for(let i=0;i<10;i++){
        //     this.dataSection.push("Membuat orang lain menjadi bersemangat, tertarik, dan berkomitmen untuk melakukan sesuatu dengan sebaik mungkin");
        // }
        // this.interestService.getSection().subscribe(res=>{
        //     console.log(res);
        // });
        let p = localStorage.getItem('interest-demo');
        if(p == null){
                this.router.navigateByUrl('/forbidden');
        }
        this.sub = this.activeRoute.params.subscribe(params => {
            this.currentId = +params['id'] - 1;
            if(this.currentId == 0)this.isIntroShow = true;
            if(!isNaN(this.currentId)){

                this.isValidForm = false;
                this.pageNumber = +params['id'];
                // this.interestService.getSection().subscribe(res=>{
                //     this.dataSection = res.sections[1];
                // });
                // this.dataSection = this.interestService.getSection().subscribe(res=>{
                    this.dataSection = this.interestService.getSection().sections[0];
                    this.totalQuestion = this.dataSection.questions.length;
                    let c = this.dataSection.questions.length/10;
                    // this.IntroSection = `This is the tutorial for <b>MINAT BAKAT</b>.`;
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
                // });
                // this.dataSection = //this.interestService.getSection().subscribe().sections[0];
                
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
        });
    }

    Next(){
        Materialize.Toast.removeAll();
        $('#btn-submit').trigger('click');
        if(this.isValidForm){
            this.pageNumber++;
            this.router.navigateByUrl('/exam/interest/'+this.pageNumber);        
        }else{
            Materialize.toast('Harap melengkapi jawaban anda!', 4000);
        }

    }
    Done(){
        Materialize.Toast.removeAll();
        $('#btn-submit').trigger('click');
        if(this.isValidForm){
            Materialize.toast('Berhasil!', 4000);
            localStorage.setItem('interest', "true");
            this.router.navigateByUrl('/exam/cognitive');        
        }else{
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
        let index=0;
        for (let prop in f.value) {
            let cls = $('#'+prop+' input');
            if(!f.valid){
                $('#lbl-'+prop).remove();
                let vl = cls.attr('class');
            if(vl.includes('ng-invalid')){
                    if(index == 0){
                        $('#'+prop+' input').focus();
                    }
                    $('#'+prop).append('<span class="red-text text-darken-2" id="lbl-'+prop+'">pilih jawaban terlebih dahulu.</span>');
                }else{
                    $('#lbl-'+prop).remove();
                }
            }else{
                $('#lbl-'+prop).remove();
                this.isValidForm = true;
            }
            index++;
        }
      }
}
import { Component, OnInit } from '@angular/core';
import { InterestService } from './interest.service';

@Component({
    templateUrl:'./interest.component.html',
    styles:['']
})
 
export class InterestComponent implements OnInit { 
    dataSection=[];
    constructor(private interestService : InterestService) { 
    }  
    ngOnInit() {
        for(let i=0;i<10;i++){
            this.dataSection.push("Membuat orang lain menjadi bersemangat, tertarik, dan berkomitmen untuk melakukan sesuatu dengan sebaik mungkin");
        }
        this.interestService.getSection().subscribe(res=>{
            console.log(res);
        });
    }
  
}
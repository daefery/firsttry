import { Component, OnInit } from '@angular/core';
import { AdminService } from './admin.service'
import { AdminSection } from './admin.model'
import { NgForm, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
	section_data;
  
  constructor(private adminService:AdminService) { }

  ngOnInit() {
  	this.adminService.getSection().subscribe(res => {
      this.section_data = res;
  	});
  }

  public addSection(){
    let temp = {
      "name":"test 4",
      "description":"this is test 4",
      "has_generic_answer":1,
      "time_duration":12
    }
    this.adminService.doPOST(temp).subscribe(res => {
      console.log(res);
    });
  }

  onSubmit(data) {
    console.log(data);  // { first: '', last: '' }
  }

}

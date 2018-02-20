import { Component, OnInit } from '@angular/core';
import { AdminService } from './admin.service'
import { AdminSection } from './admin.model'

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
	section_data:AdminSection[];
  constructor(private adminService:AdminService) { }

  ngOnInit() {
  	this.adminService.getSection().subscribe(res => {
  		this.section_data = res.data;
  	});
  }

}

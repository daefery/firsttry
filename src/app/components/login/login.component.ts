import { Component, OnInit } from '@angular/core';
import { ActivatedRoute }     from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private route: ActivatedRoute) { }
  apiValues: string;
  ngOnInit() {
  let id = this.route.snapshot.url[0].path;
  this.apiValues = id;
  }

}

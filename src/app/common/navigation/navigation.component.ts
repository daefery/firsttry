import { Component, OnInit } from '@angular/core';
import { Navigation } from './navigation.model';
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})

export class NavigationComponent {
parent: Navigation[];
childSolution: Navigation[];
constructor() {
	this.childSolution = [
		new Navigation("h04", "Work", "Work", null),
		new Navigation("h05", "Play", "Play", null),
		new Navigation("h06", "Career", "Career", null),
		new Navigation("h06", "Love", "Love", null),
		new Navigation("h06", "Api", "Api", null),
		new Navigation("h06", "Partners", "Partners", null)
	]
    this.parent = [
      new Navigation("h02", "Home", "/", null),
      new Navigation("h01", "Solutions", "profile", this.childSolution),
      new Navigation("h02", "Science", "profile", null),
      new Navigation("h03", "Assessments", "profile", null),
      new Navigation("h03", "Admin", "admin", null),
    ];
    localStorage.setItem("menus", JSON.stringify(this.parent));
  }
   
}

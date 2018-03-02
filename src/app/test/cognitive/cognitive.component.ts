import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  template: `
    <div class="row container">
    <div class="card white">
		<div class="card-content">
		  <span class="card-title"><h4>Cognitive</h4></span>
		  <span class="card-title">Section 1</span>
		  <div class="row">
		  	<div class="card-panel">
				<div id="progress">
					<div class="progress">
					  <div class="determinate" id="determinate" style="width: 46%">
					  </div>
						<div class="col s12 m4"></div>
						<div class="col s12 m4">
							<h5 class="center-align" id="progress_count" style="position: relative;">0/20</h5>
						</div>
						<div class="col s12 m4"></div>
					</div>
				</div>
				<div>
					<div id="qs_">
						<div class="col s12 m12">
							<p class="flow-text">Saya menyukai pekerjaan yang memiliki banyak aktivitas di lapangan atau luar ruangan.</p>
						</div>

						<div class="row">
							<div class="col s3">
								<p>
							      <input name="group1" type="radio" class="with-gap" id="test1" />
							      <label for="test1"><img class="responsive-img" src="assets/images/cognitive/bebek.jpg"></label>
							    </p>
							</div>
							<div class="col s3">
								<p>
							      <input name="group1" type="radio" class="with-gap" id="test2" />
							      <label for="test2"><img class="responsive-img" src="assets/images/cognitive/bebek.jpg"></label>
							    </p>
							</div>
							<div class="col s3">
								<p>
							      <input name="group1" type="radio" class="with-gap" id="test3" />
							      <label for="test3"><img class="responsive-img" src="assets/images/cognitive/bebek.jpg"></label>
							    </p>
							</div>
							<div class="col s3">
								<p>
							      <input name="group1" type="radio" class="with-gap" id="test4" />
							      <label for="test4"><img class="responsive-img" src="assets/images/cognitive/bebek.jpg"></label>
							    </p>
							</div>
								
						</div>
					</div>
					
				</div>
			</div>
		  </div>
		</div>
		<div class="card-action">
		  <a class="waves-effect waves-light btn" style="margin-left: 77%;" routerLink="/test/pii"><i class="material-icons right">arrow_forward</i>Selesai</a>
		</div>
	</div>
  </div>
  `,
  styleUrls: ['./cognitive.component.css']
})
 
export class CognitiveComponent implements OnInit { 
  constructor() { 
  }

  ngOnInit(){
  }
}
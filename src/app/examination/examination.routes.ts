import { Routes } from '@angular/router';

import { ExaminationComponent } from './examination.component';
import { DemographyComponent } from './demography/demography.component';
import { MainExaminationComponent } from './main-examination.component';
import { DemographyIntroComponent } from './demography/demography-intro.component';
import { InterestComponent } from './interest/interest.component';
import { InterestIntroComponent } from './interest/interest-intro.component'
import { CognitiveComponent } from './cognitive/cognitive.component';
import { CognitiveIntroComponent } from './cognitive/cognitive-intro.component';

// Route Configuration
export const examinationRoutes: Routes = [
	{ path: 'start', component: ExaminationComponent},
	{ path: 'exam', component: MainExaminationComponent,
		children: [
			{ path: 'demography', component: DemographyIntroComponent },
			{ path: 'demography/start', component: DemographyComponent },
			{ path: 'interest', component: InterestIntroComponent },
			{ path: 'interest/start', component: InterestComponent },
			{ path: 'cognitive', component: CognitiveIntroComponent },
			{ path: 'cognitive/start', component: CognitiveComponent },
			{ path: 'minatbakat', component: DemographyComponent },
		]
  	},
/*	{ path: 'exam/cognitive', component: CognitiveComponent},
	{ path: 'exam/pii', component: MainComponent},
	{ path: 'exam/minatbakat', component: MainComponent},
	{ path: 'exam/biodata', component: BiodataComponent}*/
];
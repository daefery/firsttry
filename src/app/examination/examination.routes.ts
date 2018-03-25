import { Routes } from '@angular/router';

import { ExaminationComponent } from './examination.component';
import { DemographyComponent } from './demography/demography.component';
import { MainExaminationComponent } from './main-examination.component';
import { DemographyIntroComponent } from './demography/demography-intro.component';
import { InterestComponent } from './interest/interest.component';
import { InterestIntroComponent } from './interest/interest-intro.component'
import { CognitiveComponent } from './cognitive/cognitive.component';
import { CognitiveIntroComponent } from './cognitive/cognitive-intro.component';
import { PersonalityIntroComponent } from './personality/personality-intro.component';
import { PersonalityComponent } from './personality/personality.component';
import { ThankYouComponent } from './thank-you.component';

// Route Configuration
export const examinationRoutes: Routes = [
	{ path: '', component: ExaminationComponent},
	{ path: 'exam', redirectTo: '/', pathMatch: 'full'},
	{ path: 'exam', component: MainExaminationComponent,
		children: [
			{ path: 'demography', component: DemographyIntroComponent },
			{ path: 'demography/start', component: DemographyComponent },
			{ path: 'interest', component: InterestIntroComponent },
			{ path: 'interest/:part/:id', component: InterestComponent },
			{ path: 'cognitive', component: CognitiveIntroComponent },
			{ path: 'cognitive/:id', component: CognitiveComponent },
			{ path: 'personality', component: PersonalityIntroComponent },
			{ path: 'personality/:id', component: PersonalityComponent },

		]
  	},
	{ path: 'thankyou', component: ThankYouComponent }
];
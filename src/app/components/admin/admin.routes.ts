import { Routes } from '@angular/router';

import { AdminComponent }    from './admin.component';
import { MainSectionComponent }    from './section/section.component';
import { SectionDetailComponent }    from './section/section-detail.component';
import { QuestionDetailComponent } from './section/question-detail.component';

// Route Configuration
export const adminRoutes: Routes = [
	{ path: 'admin', component: AdminComponent,
		children: [
			{path: 'section', component: MainSectionComponent}, 
			{path: 'section/:id', component: SectionDetailComponent}, 
			{path: 'question/:id', component: QuestionDetailComponent}
		]
	}
];
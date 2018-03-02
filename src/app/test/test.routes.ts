import { Routes } from '@angular/router';

import { MainComponent }    from './main/main.component';
import { BiodataComponent }    from './biodata/biodata.component';
import { CognitiveComponent }    from './cognitive/cognitive.component';

// Route Configuration
export const TestRoutes: Routes = [
	{ path: 'test', component: MainComponent},
	{ path: 'test/cognitive', component: CognitiveComponent},
	{ path: 'test/pii', component: MainComponent},
	{ path: 'test/minatbakat', component: MainComponent},
	{ path: 'test/biodata', component: BiodataComponent}
];
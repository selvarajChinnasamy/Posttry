import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { JobsComponent } from './jobs/jobs.component';

export const router: Routes = [
    { path: '', redirectTo: 'jobs', pathMatch: 'full' },
    { path: 'jobs', component: JobsComponent },
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
import { Routes } from '@angular/router';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { ModelDrivenComponent } from './model-driven/model-driven.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'template-driven', component: TemplateDrivenComponent },
    { path: 'model-driven', component: ModelDrivenComponent },
    { path: '**', redirectTo: 'home', pathMatch: 'full' }
];

import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

export const routes: Routes = [
    { path: '', redirectTo:'Home',pathMatch:'full' },
    { path: 'Home', component: HomeComponent, title: 'Home page' },
    {path:'About',component:AboutComponent , title:'About page'},
    {path:'Contact', component:ContactComponent,title:'Contact page'},
    {path:'Portfolio', component:PortfolioComponent,title:'Portfolio'},
    { path: '**', component: NotFoundComponent, title: 'Page not found' } 

];

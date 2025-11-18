import { Routes } from '@angular/router';
import { skillResolver } from './resolver/skill-resolver';
import { experienceResolver } from './resolver/experience-resolver';

export const routes: Routes = [
  {
    path: '',
    title: 'Accueil',
    loadComponent: () => import('../features/home/pages/home.page'),
  },
  {
    path: 'about',
    title: 'A propos',
    loadComponent: () => import('../features/about/pages/about.page'),
  },
  {
    path: 'experiences',
    title: 'Expériences',
    loadComponent: () => import('../features/experiences/pages/experience.page'),
    resolve: { skill: skillResolver, experience: experienceResolver}
  },
  {
    path: 'projects',
    title: 'Projets',
    loadComponent: () => import('../features/project/pages/project.page'),
  },
  {
    path: 'contact',
    title: 'Contact',
    loadComponent: () => import('../features/contact/pages/contact.page'),
  },
  {
    path: 'error',
    title: 'Error',
    loadComponent: () => import('../core/error/pages/error.page'),
  },
  { path: 'home', redirectTo: '' },
  { path: '**', redirectTo: 'error' },
];

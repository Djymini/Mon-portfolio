import { Routes } from '@angular/router';
import { skillResolver } from './resolver/skill-resolver';
import { experienceResolver } from './resolver/experience-resolver';
import { projectResolver } from './resolver/project-resolver';

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
    loadComponent: () => import('../features/projects/pages/project.page'),
    resolve: { project: projectResolver }
  },
  {
    path: 'error',
    title: 'Error',
    loadComponent: () => import('../core/error/pages/error.page'),
  },
  { path: 'home', redirectTo: '' },
  { path: '**', redirectTo: 'error' },
];

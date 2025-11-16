import { Routes } from '@angular/router';

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
    loadComponent: () => import('../features/experience/pages/experience.page'),
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

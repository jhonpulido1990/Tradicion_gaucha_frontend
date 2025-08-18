import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/pages.routes').then(m => m.PageRoutes)
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];

import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '',
  },
  {
    path: '',
    data: { title: '' },
    loadComponent: () =>
      import('./@layout/layout.component').then((c) => c.LayoutComponent),
    children: [
      {
        path: 'dashboard',
        data: { title: 'Dashboard' },
        loadComponent: async() =>
            import('./modules/dashboard/dashboard.component').then((c) => c.DashboardComponent),
    },
    ]
  },
];

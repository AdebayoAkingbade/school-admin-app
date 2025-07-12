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
        loadComponent: async () =>
          import('./modules/dashboard/dashboard.component').then(
            (c) => c.DashboardComponent
          ),
      },
      {
        path: 'admin-query',
        data: { title: 'Admin Query' },
        loadComponent: async () =>
          import('./modules/admin-query/admin-query.component').then(
            (c) => c.AdminQueryComponent
          ),
      },
      {
        path: 'visitors-book',
        data: { title: 'Visitors Book' },
        loadComponent: async () =>
          import('./modules/visitors-book/visitors-book.component').then(
            (c) => c.VisitorsBookComponent
          ),
      },
      {
        path: 'complaints',
        data: { title: 'Complaints' },
        loadComponent: async () =>
          import('./modules/complaints/complaints.component').then(
            (c) => c.ComplaintsComponent
          ),
      },
      {
        path: 'certificate',
        data: { title: 'Certificate' },
        loadComponent: async () =>
          import('./modules/certificate/certificate.component').then(
            (c) => c.CertificateComponent
          ),
      },
      {
        path: 'admission-application',
        data: { title: 'Admission Application' },
        loadComponent: async () =>
          import('./modules/admission-application/admission-application.component').then(
            (c) => c.AdmissionApplicationComponent
          ),
      },
      {
        path: 'admission-details',
        data: { title: 'Admission Details' },
        loadComponent: async () =>
          import('./modules/admission-application/admission-details/admission-details.component').then(
            (c) => c.AdmissionDetailsComponent
          ),
      },
      {
        path: 'user-student-admission',
        data: { title: 'Student Admission' },
        loadComponent: async () =>
          import('./modules/Users/student-admission/student-admission.component').then(
            (c) => c.StudentAdmissionComponent
          ),
      },
      {
        path: 'user-manage-student',
        data: { title: 'Manage Student' },
        loadComponent: async () =>
          import('./modules/Users/manage-student/manage-student.component').then(
            (c) => c.ManageStudentComponent
          ),
      },
      {
        path: 'user-class',
        data: { title: 'Create Class' },
        loadComponent: async () =>
          import('./modules/Users/class/class.component').then(
            (c) => c.ClassComponent
          ),
      },
      {
        path: 'user-wallet-transaction',
        data: { title: 'Wallet Transaction' },
        loadComponent: async () =>
          import('./modules/Users/wallet/wallet.component').then(
            (c) => c.WalletComponent
          ),
      },
    ],
  },
];

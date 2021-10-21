import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from '../component/dashboard/dashboard.component';
import { AuthGuard } from './auth-guard';

const routes: Routes = [
  { path: 'admin', component: DashboardComponent, canActivate: [AuthGuard] },
];

export const AdminRoutes = RouterModule.forChild(routes);

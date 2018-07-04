import { PipesComponent } from './pipes/pipes.component';
import { HttpObservablesComponent } from './http-observables/http-observables.component';
import { TmDrvnComponent } from './forms/tm-drvn/tm-drvn.component';
import { AnalytcsComponent } from './project-mod/analytcs/analytcs.component';
import { AdminGuard } from './admin/admin.guard';
import { ProfileComponent } from './admin/profile.component';
import { FpComponent } from './fp/fp.component';
import { AdminComponent } from './admin/admin.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PaymentComponent } from './admin/payment.component';
import { ProjModComponent } from './project-mod/proj-mod.component';
import { FormsComponent } from './forms/forms.component';
import { DtDrvnComponent } from './forms/dt-drvn/dt-drvn.component';

const projRoutes: Routes = [
  { path: 'analytics', component: AnalytcsComponent }
]
const adminRoutes: Routes = [
  { path: 'profile', component: ProfileComponent },
  { path: 'payment', component: PaymentComponent }
]

const formsRoute: Routes = [
  { path: 'tmp', component: TmDrvnComponent },
  { path: 'dt', component: DtDrvnComponent }
]
const routes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: 'admin/:adNm',
    component: AdminComponent,
    children: adminRoutes,
    canActivate: [AdminGuard]
  },
  { path: 'fp/:eml', component: FpComponent },
  {
    path: 'proj',
    component: ProjModComponent,
    children: projRoutes
  },
  { path: 'forms', component: FormsComponent, children: formsRoute },
  { path: 'http', component: HttpObservablesComponent },
  { path: 'pipes', component: PipesComponent },
  { path: '**', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

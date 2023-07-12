import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminEventComponent } from './admin-event/admin-event.component';
import { EventAdmissionRequestComponent } from './event-admission-request/event-admission-request.component';
import { AdminSpecialComponent } from './admin-special/admin-special.component';
import { SpecialAdmissionRequestComponent } from './special-admission-request/special-admission-request.component';
import { AdminAuthGuard } from './admin-auth.guard';
import { NewBatchComponent } from './new-batch/new-batch.component';
import { NewSpecialBatchComponent } from './new-special-batch/new-special-batch.component';
import { EditEventComponent } from './edit-event/edit-event.component';
import { EditSpecialComponent } from './edit-special/edit-special.component';

const routes: Routes = [
  {path : 'admin',canActivate:[AdminAuthGuard],component:AdminDashboardComponent},
  
  {path:'admin/adminlogin',component:AdminLoginComponent},
  {path:'admin/adminevent',canActivate:[AdminAuthGuard],component:AdminEventComponent},
  {path:'admin/adminspecial',canActivate:[AdminAuthGuard],component:AdminSpecialComponent},
  {path:'admin/adminevent/eventadmissionrequest',canActivate:[AdminAuthGuard],component:EventAdmissionRequestComponent},
  {path:'admin/adminspecial/specialadmissionrequest',canActivate:[AdminAuthGuard],component:SpecialAdmissionRequestComponent},
  {path:'admin/adminevent/launch',canActivate:[AdminAuthGuard],component:NewBatchComponent},
  {path:'admin/adminspecial/launchspecial',canActivate:[AdminAuthGuard],component:NewSpecialBatchComponent},
  {path:'admin/adminevent/editevent/:_id',canActivate:[AdminAuthGuard],component:EditEventComponent},
  {path:'admin/adminspecial/editspecial/:_id',canActivate:[AdminAuthGuard],component:EditSpecialComponent}

  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

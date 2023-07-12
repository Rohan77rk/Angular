import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventsComponent } from './events/events.component';
import { SpecialEventsComponent } from './special-events/special-events.component';
import { LoginComponent } from './login/login.component';
import { EventAdmissionComponent } from './event-admission/event-admission.component';
import { AuthGuard } from './auth.guard';
import { RegisterComponent } from './register/register.component';
import { SpecialAdmissionComponent } from './special-admission/special-admission.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/events',
    pathMatch: 'full'
  },
  {
    path: 'events',
    component: EventsComponent
  },
  {
    path: 'specialevents',
    canActivate :[AuthGuard],
    component: SpecialEventsComponent
  },
  {
    path : 'login',
    component: LoginComponent
  },
  {
    path : 'events/eventadmission',
    component : EventAdmissionComponent
  },
  {
    path : 'specialevents/specialadmission',
    component : SpecialAdmissionComponent
  },
  {
    path : 'register',
    component : RegisterComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

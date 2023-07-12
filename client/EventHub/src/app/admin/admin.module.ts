import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminEventComponent } from './admin-event/admin-event.component';
import { AdminSpecialComponent } from './admin-special/admin-special.component';
import { EventAdmissionRequestComponent } from './event-admission-request/event-admission-request.component';
import { SpecialAdmissionRequestComponent } from './special-admission-request/special-admission-request.component';
import { NewBatchComponent } from './new-batch/new-batch.component';
import { NewSpecialBatchComponent } from './new-special-batch/new-special-batch.component';
import { EditEventComponent } from './edit-event/edit-event.component';
import { EditSpecialComponent } from './edit-special/edit-special.component';


@NgModule({
  declarations: [
    AdminLoginComponent,
    AdminHeaderComponent,
    AdminDashboardComponent,
    AdminEventComponent,
    AdminSpecialComponent,
    EventAdmissionRequestComponent,
    SpecialAdmissionRequestComponent,
    NewBatchComponent,
    NewSpecialBatchComponent,
    EditEventComponent,
    EditSpecialComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }

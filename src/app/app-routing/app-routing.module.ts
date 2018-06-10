import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import {TrialsComponent} from '../trials/trials.component';
import {TrialComponent} from '../trial/trial.component';
import {PatientComponent} from '../patient/patient.component';

const routes: Routes = [
  { path: '', redirectTo: '/trials', pathMatch: 'full' }, {
    path: 'trials', component: TrialsComponent
  }, {
    path: 'trials/:id', component: TrialComponent
  }, {
    path: 'patients/:id', component: PatientComponent
  }];

@NgModule({
  exports: [RouterModule],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)],
  declarations: []
})
export class AppRoutingModule { }

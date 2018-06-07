import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {HttpModule} from '@angular/http';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { TrialsComponent } from './trials/trials.component';
import {AppRoutingModule} from './app-routing/app-routing.module';
import { TrialComponent } from './trial/trial.component';
import { DoctorComponent } from './doctor/doctor.component';
import { PatientComponent } from './patient/patient.component';
import { PatientsComponent } from './patients/patients.component';
import { DoctorsComponent } from './doctors/doctors.component';
import {DataService} from './data.service';
import { ObservationsComponent } from './observations/observations.component';
import { ObservationComponent } from './observation/observation.component';
import { AddNewDoctorComponent } from './add-new-doctor/add-new-doctor.component';
import {Configuration} from './constants';
import { AddNewPatientComponent } from './add-new-patient/add-new-patient.component';
import { AddTrialComponent } from './add-trial/add-trial.component';
import { DangerZoneTrialComponent } from './danger-zone-trial/danger-zone-trial.component';
import { DosagesComponent } from './dosages/dosages.component';
import { AddNewDosageComponent } from './add-new-dosage/add-new-dosage.component';
import { AddNewObservationComponent } from './add-new-observation/add-new-observation.component';


@NgModule({
  declarations: [
    AppComponent,
    TrialsComponent,
    TrialComponent,
    DoctorComponent,
    PatientComponent,
    PatientsComponent,
    DoctorsComponent,
    ObservationsComponent,
    ObservationComponent,
    AddNewDoctorComponent,
    AddNewPatientComponent,
    AddTrialComponent,
    DangerZoneTrialComponent,
    DosagesComponent,
    AddNewDosageComponent,
    AddNewObservationComponent,
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpModule
  ],
  providers: [DataService, Configuration],
  bootstrap: [AppComponent]
})
export class AppModule { }

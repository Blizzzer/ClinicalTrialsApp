import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


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
    ObservationComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

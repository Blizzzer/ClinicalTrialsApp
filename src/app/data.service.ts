import { Injectable } from '@angular/core';
import { Observable} from 'rxjs/Observable';
import {TrialAbbreviation} from './TrialAbbreviation';
import {trialsToChoose} from './mock-trials';
import {of} from 'rxjs/observable/of';
import {PatientAbbreviation} from './PatientAbbreviation';
import {patientsToChoose} from './mock-patients';
import {DoctorAbbreviation} from './DoctorAbbreviation';
import {doctorsToChoose} from './mock-doctors';
import {Patient} from './Patient';
import {patient} from './mock-patient';
import {Trial} from './Trial';
import {trial} from './mock-trial';
import {ObservationAbbreviation} from './ObservationAbbreviation';
import {observationsToChoose} from './mock-observations';
import {Doctor} from './Doctor';


@Injectable()
export class DataService {

  constructor() { }
  getTrials(): Observable<TrialAbbreviation[]> {
    return of(trialsToChoose);
  }
  getPatients(patientType: number): Observable<PatientAbbreviation[]> {
    return of(patientsToChoose);
  }
  getDoctors(): Observable<DoctorAbbreviation[]> {
    return of(doctorsToChoose);
  }
  getPatient(): Observable<Patient> {
    return of(patient);
  }
  getTrial(): Observable<Trial> {
    return of(trial);
  }
  getObservations(): Observable<ObservationAbbreviation[]>{
    return of(observationsToChoose);
  }
  public postNewDoctor(doctorToSend: Doctor) {
    console.log(JSON.stringify(doctorToSend));
  }

}

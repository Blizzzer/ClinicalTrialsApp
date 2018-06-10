import {HttpClient, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest} from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Observable} from 'rxjs/Observable';

import {Configuration} from './constants';
import {DoctorToSend} from './DataObjects/DoctorToSend';
import {PatientToSend} from './DataObjects/PatientToSend';
import {TrialToSend} from './DataObjects/TrialToSend';
import {DosageToSend} from './DataObjects/DosageToSend';
import {ObservationToSend} from './DataObjects/ObservationToSend';
import {Password} from './DataObjects/Password';
import {ResponseMSG} from './DataObjects/Response';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable()
export class DataService {
  private actionUrl: string;
  constructor(private http: HttpClient, private _configuration: Configuration) {
  this.actionUrl = _configuration.Server;
  }
  public getTrials<Trial>(isArchived: number): Observable<Trial> {
    console.log('GET; ' + this.actionUrl + 'trials?isArchived=' + isArchived);
    return this.http.get<Trial>(this.actionUrl + 'trials?isArchived=' + isArchived);
  }
  public getPatients<Patient>(patientType: number, trialId: number): Observable<Patient> {
    console.log('GET; ' + this.actionUrl + 'patients?trialId=' + trialId);
    return this.http.get<Patient>(this.actionUrl + 'patients?trialId=' + trialId);
  }
  public getPatientsWithPhase<Patient>(patientType: number, trialId: number, phase: number): Observable<Patient> {
    console.log('GET; ' + this.actionUrl + 'patients?trialId=' + trialId + '&phase=' + phase);
    return this.http.get<Patient>(this.actionUrl + 'patients?trialId=' + trialId + '&phase=' + phase);
  }
  public getPatientsWithBoth<Patient>(patientType: number, trialId: number, phase: number, group: number): Observable<Patient> {
    console.log('GET; ' + this.actionUrl + 'patients?trialId=' + trialId  + '&phase=' + phase + '&group=' + group);
    return this.http.get<Patient>(this.actionUrl + 'patients?trialId=' + trialId  + '&phase=' + phase + '&group=' + group);
  }
  public getDoctors<Doctor>(trialId: number): Observable<Doctor> {
    console.log('GET; ' + this.actionUrl + 'doctors?trialId=' + trialId);
    return this.http.get<Doctor>(this.actionUrl + 'doctors?trialId=' + trialId);
  }
  public getDosages<Dosage>(patientId: number): Observable<Dosage> {
    console.log('GET; ' + this.actionUrl + 'dosages?patientId=' + patientId);
    return this.http.get<Dosage>(this.actionUrl + 'dosages?patientId=' + patientId);
  }
  public getPatient<PatientFull>(id: number): Observable<PatientFull> {
    return this.http.get<PatientFull>(this.actionUrl + 'patients/' + id);
  }
  public getTrial<Trial>(id: number): Observable<Trial> {
    return this.http.get<Trial>(this.actionUrl + 'trials/' + id);
  }
  public getObservations<Observation>(patientId: number): Observable<Observation> {
    console.log('GET; ' + this.actionUrl + 'observations?patientId=' + patientId);
    return this.http.get<Observation>(this.actionUrl + 'observations?patientId=' + patientId);
  }
  public postDoctor(doctorToSend: DoctorToSend): Promise<DoctorToSend> {
    console.log(JSON.stringify(doctorToSend));
    return this.http.post(this.actionUrl + 'doctors', doctorToSend)
      .toPromise()
      .then(() => doctorToSend);
  }
  public postTrial(trialToSend: TrialToSend): Promise<TrialToSend>  {
    console.log(JSON.stringify(trialToSend));
    return this.http.post(this.actionUrl + 'trials', trialToSend)
      .toPromise()
      .then(() => trialToSend);
  }
  public nextPhase(trialId: number): Promise<void> {
    console.log('PATCH; ' + this.actionUrl + 'trials/' + trialId + '/phase');
    return this.http.patch(this.actionUrl + 'trials/' + trialId + '/phase', '{}').toPromise()
      .then(() => null);
  }
  public setArchive(trialId: number): Promise<void> {
    console.log('PATCH; ' + this.actionUrl + 'trials/' + trialId + '/archive');
    return this.http.patch(this.actionUrl + 'trials/' + trialId + '/archive', '{}').toPromise()
      .then(() => null);
  }
  public postPatient(patientToSend: PatientToSend): Promise<PatientToSend> {
    console.log(JSON.stringify(patientToSend));
    return this.http.post(this.actionUrl + 'patients', patientToSend)
      .toPromise()
      .then(() => patientToSend);
  }
  public postDosage(dosageToSend: DosageToSend): Promise<DosageToSend> {
    console.log(JSON.stringify(dosageToSend));
    return this.http.post(this.actionUrl + 'dosages', dosageToSend)
      .toPromise()
      .then(() => dosageToSend);
  }
  public postObservation(observationToSend: ObservationToSend): Promise<ObservationToSend> {
    console.log(JSON.stringify(observationToSend));
    return this.http.post(this.actionUrl + 'observations', observationToSend)
      .toPromise()
      .then(() => observationToSend);
  }
  public showGroups(password: Password): Promise<ResponseMSG> {
    console.log(JSON.stringify(password));
    return this.http.post(this.actionUrl + 'trials/password', password)
      .toPromise()
      .then((data) => data,
        (err) => err);
  }

}

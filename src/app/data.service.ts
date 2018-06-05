import {HttpClient, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest} from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Observable} from 'rxjs/Observable';

import {of} from 'rxjs/observable/of';

import {ObservationAbbreviation} from './DataObjects/ObservationAbbreviation';
import {observationsToChoose} from './MockData/mock-observations';
import {Configuration} from './constants';
import {DoctorToSend} from './DataObjects/DoctorToSend';
import {PatientToSend} from './DataObjects/PatientToSend';
import {TrialToSend} from './DataObjects/TrialToSend';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable()
export class DataService {
  private actionUrl: string;
  constructor(private http: HttpClient, private _configuration: Configuration) {
  this.actionUrl = _configuration.Server;
  }
  getTrials<Trial>(isArchived: number): Observable<Trial> {
    console.log('GET; ' + this.actionUrl + 'trials?isArchived=' + isArchived);
    return this.http.get<Trial>(this.actionUrl + 'trials?isArchived=' + isArchived);
  }
  getPatients<Patient>(patientType: number, trialId: number): Observable<Patient> {
    console.log('GET; ' + this.actionUrl + 'patients?trialId=' + trialId);
    return this.http.get<Patient>(this.actionUrl + 'patients?trialId=' + trialId);
  }
  getPatientsWithPhase<Patient>(patientType: number, trialId: number, phase: number): Observable<Patient> {
    console.log('GET; ' + this.actionUrl + 'patients?trialId=' + trialId + '&phase=' + phase);
    return this.http.get<Patient>(this.actionUrl + 'patients?trialId=' + trialId + '&phase=' + phase);
  }
  getPatientsWithBoth<Patient>(patientType: number, trialId: number, phase: number, isPlacebo: number): Observable<Patient> {
    console.log('GET; ' + this.actionUrl + 'patients?trialId=' + trialId  + '&phase=' + phase + '&isPlacebo=' + isPlacebo);
    return this.http.get<Patient>(this.actionUrl + 'patients?trialId=' + trialId  + '&phase=' + phase + '&isPlacebo=' + isPlacebo);
  }
  getDoctors<Doctor>(trialId: number): Observable<Doctor> {
    console.log('GET; ' + this.actionUrl + 'doctors?trialId=' + trialId);
    return this.http.get<Doctor>(this.actionUrl + 'doctors?trialId=' + trialId);
  }
  getPatient(): void {
    console.log('get patient');
  }
  getTrial<Trial>(id: number): Observable<Trial> {
    return this.http.get<Trial>(this.actionUrl + 'trials/' + id);
  }
  getObservations(): Observable<ObservationAbbreviation[]> {
    return of(observationsToChoose);
  }
  public postDoctor(doctorToSend: DoctorToSend): Promise<DoctorToSend> {
    console.log(JSON.stringify(doctorToSend));
    return this.http.post(this.actionUrl + 'doctors', doctorToSend)
      .toPromise()
      .then(() => doctorToSend);
  }
  public postTrial(trialToSend: TrialToSend): Promise<TrialToSend>  {
    console.log(JSON.stringify(trialToSend));
    return this.http.post(this.actionUrl + 'doctors', trialToSend)
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

}

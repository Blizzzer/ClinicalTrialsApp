import {HttpClient, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest} from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Observable} from 'rxjs/Observable';

import {of} from 'rxjs/observable/of';
import {Patient} from './Patient';

import {ObservationAbbreviation} from './ObservationAbbreviation';
import {observationsToChoose} from './mock-observations';
import {Doctor} from './Doctor';
import {Configuration} from './constants';
import {DoctorToSend} from './DoctorToSend';

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
    return this.http.get<Trial>(this.actionUrl + 'trials?isArchived=' + isArchived);
  }
  getPatients<Patient>(patientType: number, trialId: number): Observable<Patient> {
    return this.http.get<Patient>(this.actionUrl + 'patients?trialId=' + trialId);
  }
  getDoctors<Doctor>(trialId: number): Observable<Doctor> {
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

}

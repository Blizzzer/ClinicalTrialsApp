import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import {Patient} from '../DataObjects/Patient';
import {ActivatedRoute} from '@angular/router';
import {Configuration} from '../constants';
import {HttpClient} from '@angular/common/http';
import {Phase} from '../DataObjects/Phase';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements OnInit {
  private actionUrl: string;
  protected patients: Patient[];
  protected patientsType = 2;
  protected phaseToAsk: number;
  private trialId: number;
  constructor(private dataService: DataService, private route: ActivatedRoute,
              private http: HttpClient, private _configuration: Configuration) {
    this.actionUrl = _configuration.Server;
  }
  public getPatients(): void {
    if (this.patientsType === 2) {
      this.dataService.getPatientsWithPhase(this.patientsType, this.trialId, this.phaseToAsk)
        .subscribe((patients: Patient[]) => this.patients = patients);
    } else {
      this.dataService.getPatientsWithBoth(this.patientsType, this.trialId, this.phaseToAsk, this.patientsType)
        .subscribe((patients: Patient[]) => this.patients = patients);
    }
  }
  private getStandardPatients(): void {
    this.dataService.getPatients(this.patientsType, this.trialId).subscribe((patients: Patient[]) => this.patients = patients);
  }
  private getTrialId(): void {
    this.trialId = +this.route.snapshot.paramMap.get('id');
  }
  ngOnInit() {
    this.getTrialId();
    this.http.get(this.actionUrl + 'phase/' + this.trialId).subscribe((data: Phase) => {
      this.phaseToAsk = data.phase;
    });
    this.getStandardPatients();
  }

}

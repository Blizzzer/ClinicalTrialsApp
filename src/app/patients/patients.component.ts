import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import {Patient} from '../DataObjects/Patient';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements OnInit {
  patients: Patient[];
  patientsType = 0;
  trialId: number;
  constructor(private dataService: DataService, private route: ActivatedRoute) { }
  getPatients(): void {
    this.dataService.getPatients(this.patientsType, this.trialId).subscribe((patients: Patient[]) => this.patients = patients);
  }
  getTrialId(): void {
    this.trialId = +this.route.snapshot.paramMap.get('id');
  }
  ngOnInit() {
    this.getTrialId();
    this.getPatients();
  }

}

import { Component, OnInit } from '@angular/core';
import {Patient} from '../Patient';
import {DataService} from '../data.service';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {
  patient: Patient;
  constructor(private dataService: DataService) { }

  getPatient(): void {
    this.dataService.getPatient().subscribe(patient => this.patient = patient);
  }

  ngOnInit() {
    this.getPatient();
  }

}

import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import {PatientFull} from '../DataObjects/PatientFull';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {
  public isDosagesCollapsed = true;
  public isObservationsCollapsed = true;
  public isAddingDosageCollapsed = true;
  public isAddingObservationCollapsed = true;
  patient: PatientFull;
  patientId: number;
  constructor(private dataService: DataService, private route: ActivatedRoute) { }
  getPatient(): void {
    this.dataService.getPatient<PatientFull>(this.patientId).subscribe((patient: PatientFull) => this.patient = patient);
  }

  getPatientID(): void {
    this.patientId = +this.route.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.getPatientID();
    this.getPatient();
  }

}

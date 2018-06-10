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
  protected isDosagesCollapsed = true;
  protected isObservationsCollapsed = true;
  public isAddingDosageCollapsed = true;
  protected isAddingObservationCollapsed = true;
  protected patient: PatientFull;
  private patientId: number;
  protected patientGroup: string;
  private static groupConvert(group: number): string {
    if (group === 0) {
      return 'A';
    } else if (group === 1) {
      return 'B';
    }
  }
  constructor(private dataService: DataService, private route: ActivatedRoute) { }
  protected getPatient(): void {
    this.dataService.getPatient<PatientFull>(this.patientId).subscribe((patient: PatientFull) => {this.patient = patient;
    this.patientGroup = PatientComponent.groupConvert(this.patient.group);
    });
  }

  private getPatientID(): void {
    this.patientId = +this.route.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.getPatientID();
    this.getPatient();
  }
}

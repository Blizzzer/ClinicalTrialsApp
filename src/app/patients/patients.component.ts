import { Component, OnInit } from '@angular/core';
import {PatientAbbreviation} from '../PatientAbbreviation';
import {DataService} from '../data.service';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements OnInit {
  patients: PatientAbbreviation[];
  patientsType = 0;
  constructor(private dataService: DataService) { }
  getPatients(): void {
    this.dataService.getPatients(this.patientsType).subscribe(patientsToChoose => this.patients = patientsToChoose);
  }

  ngOnInit() {
    this.getPatients();
  }

}

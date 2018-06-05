import { Component, OnInit } from '@angular/core';
import {PatientToSend} from '../DataObjects/PatientToSend';
import {DataService} from '../data.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-add-new-patient',
  templateUrl: './add-new-patient.component.html',
  styleUrls: ['./add-new-patient.component.css']
})
export class AddNewPatientComponent implements OnInit {
  name: string;
  surname: string;
  birthDate: string;
  ssn: string;
  isPlacebo: number;
  trialId: number;
  patientToSend: PatientToSend;
  constructor(private _dataService: DataService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getTrialId();
  }
  getTrialId(): void {
    this.trialId = +this.route.snapshot.paramMap.get('id');
  }
  goAdd(): void {
    this.patientToSend = new PatientToSend(this.name, this.surname, this.birthDate, this.isPlacebo, this.ssn, this.trialId);
    this._dataService.postPatient(this.patientToSend);
  }

}

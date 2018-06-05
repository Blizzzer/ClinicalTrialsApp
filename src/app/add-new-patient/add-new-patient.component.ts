import { Component, OnInit } from '@angular/core';
import {PatientToSend} from '../DataObjects/PatientToSend';
import {DataService} from '../data.service';
import {ActivatedRoute} from '@angular/router';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-new-patient',
  templateUrl: './add-new-patient.component.html',
  styleUrls: ['./add-new-patient.component.css']
})
export class AddNewPatientComponent implements OnInit {
  name: string;
  surname: string;
  birthDate: string;
  birthDateModel: NgbDateStruct;
  ssn: string;
  trialId: number;
  patientToSend: PatientToSend;
  monthS: string;
  dayS: string;
  date: {year: number, month: number};
  constructor(private _dataService: DataService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getTrialId();
  }
  getTrialId(): void {
    this.trialId = +this.route.snapshot.paramMap.get('id');
  }
  goAdd(): void {
    if (this.birthDateModel.month <= 9) {
      this.monthS = '0' + this.birthDateModel.month;
    } else {
      this.monthS = String(this.birthDateModel.month);
    }
    if (this.birthDateModel.day <= 9) {
      this.dayS = '0' + this.birthDateModel.day;
    } else {
      this.dayS = String(this.birthDateModel.day);
    }
    this.birthDate = this.birthDateModel.year + '-' + this.monthS + '-' + this.dayS;
    this.patientToSend = new PatientToSend(this.name, this.surname, this.birthDate, this.ssn, this.trialId);
    this._dataService.postPatient(this.patientToSend);
  }

}

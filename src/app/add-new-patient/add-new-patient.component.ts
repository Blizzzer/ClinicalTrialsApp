import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {PatientToSend} from '../DataObjects/PatientToSend';
import {DataService} from '../data.service';
import {ActivatedRoute} from '@angular/router';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import {PatientsComponent} from '../patients/patients.component';

@Component({
  selector: 'app-add-new-patient',
  templateUrl: './add-new-patient.component.html',
  styleUrls: ['./add-new-patient.component.css']
})
export class AddNewPatientComponent implements OnInit {
  protected name: string;
  protected surname: string;
  private birthDate: string;
  protected birthDateModel: NgbDateStruct;
  protected ssn: string;
  private trialId: number;
  private patientToSend: PatientToSend;
  private monthS: string;
  private dayS: string;
  protected date: {year: number, month: number};
  @Output() toggle: EventEmitter<null> = new EventEmitter();
  @Input() patientsList: PatientsComponent;
  constructor(private _dataService: DataService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getTrialId();
  }
  private getTrialId(): void {
    this.trialId = +this.route.snapshot.paramMap.get('id');
  }
  protected goAdd(): void {
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
    if (this.name === '' || this.surname === '') {
      alert('Fill all input fields before adding!');
    } else {
      this.patientToSend = new PatientToSend(this.name, this.surname, this.birthDate, this.ssn, this.trialId);
      this._dataService.postPatient(this.patientToSend).then((data: null) => this.patientsList.getPatients() );
      this.toggle.emit();
    }
  }

}

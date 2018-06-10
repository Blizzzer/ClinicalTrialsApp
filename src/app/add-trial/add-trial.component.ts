import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import {DataService} from '../data.service';
import {TrialToSend} from '../DataObjects/TrialToSend';
import {DoctorToSend} from '../DataObjects/DoctorToSend';

@Component({
  selector: 'app-add-trial',
  templateUrl: './add-trial.component.html',
  styleUrls: ['./add-trial.component.css']
})
export class AddTrialComponent implements OnInit {
  protected studyTitle: string;
  protected studyDescription: string;
  protected treatmentDescription: string;
  protected startDateModel: NgbDateStruct;
  protected responsibleParty: string;
  protected masking: number;
  protected estimatedEndDateModel: NgbDateStruct;
  protected eligibilityCriterias: string;
  protected contactsAndLocations: string;
  private trialToSend: TrialToSend;
  private startDate: string;
  private estimatedEndDate: string;
  protected password: string;
  private monthSD: string;
  private daySD: string;
  private monthED: string;
  private dayED: string;
  protected date: {year: number, month: number};
  @Output() toggle: EventEmitter<null> = new EventEmitter();
  @Output() added: EventEmitter<null> = new EventEmitter();
  constructor(private _dataService: DataService) { }

  ngOnInit() {
  }
  protected goAdd(): void {
    if (this.startDateModel.month <= 9) {
      this.monthSD = '0' + this.startDateModel.month;
    } else {
      this.monthSD = String(this.startDateModel.month);
    }
    if (this.startDateModel.day <= 9) {
      this.daySD = '0' + this.startDateModel.day;
    } else {
      this.daySD = String(this.startDateModel.day);
    }
    if (this.estimatedEndDateModel.month <= 9) {
      this.monthED = '0' + this.estimatedEndDateModel.month;
    } else {
      this.monthED = String(this.estimatedEndDateModel.month);
    }
    if (this.estimatedEndDateModel.day <= 9) {
      this.dayED = '0' + this.estimatedEndDateModel.day;
    } else {
      this.dayED = String(this.estimatedEndDateModel.day);
    }
    this.startDate = this.startDateModel.year + '-' + this.monthSD + '-' + this.daySD;
    this.estimatedEndDate = this.estimatedEndDateModel.year + '-' + this.monthED + '-' + this.dayED;
    if (this.studyTitle === '') {
      alert('Fill all input fields before adding!');
    } else {
      this.trialToSend = new TrialToSend(this.studyTitle, this.studyDescription, this.treatmentDescription,
        this.startDate, this.responsibleParty, this.masking,
        this.estimatedEndDate, this.eligibilityCriterias, this.contactsAndLocations, this.password);
      this._dataService.postTrial(this.trialToSend).then((data: null) => this.added.emit());
      this.toggle.emit();
    }
  }
}

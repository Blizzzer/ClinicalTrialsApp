import { Component, OnInit } from '@angular/core';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import {DataService} from '../data.service';
import {DoctorToSend} from '../DataObjects/DoctorToSend';
import {TrialToSend} from '../DataObjects/TrialToSend';

@Component({
  selector: 'app-add-trial',
  templateUrl: './add-trial.component.html',
  styleUrls: ['./add-trial.component.css']
})
export class AddTrialComponent implements OnInit {
  public studyTitle: string;
  public studyDescription: string;
  public treatmentDescription: string;
  public startDateModel: NgbDateStruct;
  public responsibleParty: string;
  public masking: number;
  public estimatedEndDateModel: NgbDateStruct;
  public eligibilityCriterias: string;
  public contactsAndLocations: string;
  public trialToSend: TrialToSend;
  public startDate: string;
  public estimatedEndDate: string;
  date: {year: number, month: number};
  constructor(private _dataService: DataService) { }

  ngOnInit() {
  }
  goAdd(): void {
    this.startDate = this.startDateModel.year + '-' + this.startDateModel.month + '-' + this.startDateModel.day;
    this.estimatedEndDate = this.estimatedEndDateModel.year + '-' + this.estimatedEndDateModel.month + '-' + this.estimatedEndDateModel.day;
    this.trialToSend = new TrialToSend(this.studyTitle, this.studyDescription, this.treatmentDescription,
      this.startDate, this.responsibleParty, this.masking,
      this.estimatedEndDate, this.eligibilityCriterias, this.contactsAndLocations);
    this._dataService.postTrial(this.trialToSend);
  }
}

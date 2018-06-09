import { Component, OnInit } from '@angular/core';
import {Trial} from '../DataObjects/Trial';
import {DataService} from '../data.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-trial',
  templateUrl: './trial.component.html',
  styleUrls: ['./trial.component.css']
})
export class TrialComponent implements OnInit {
  public isPatientCollapsed = true;
  public isDoctorCollapsed = true;
  public isAddingNewDoctorCollapsed = true;
  public isAddingPatientCollapsed = true;
  public isAdditionalInfoCollapsed = true;
  public isGroupsCollapsed = true;
  public trial: Trial;
  public trialId: number;

  constructor(private dataService: DataService, private route: ActivatedRoute) { }

  getTrial(): void {
    this.dataService.getTrial<Trial>(this.trialId).subscribe((trial: Trial) => {this.trial = trial; console.log(this.trial); });
  }

  getTrialId(): void {
    this.trialId = +this.route.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.getTrialId();
    this.getTrial();
  }

}

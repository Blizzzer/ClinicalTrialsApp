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
  protected isPatientCollapsed = true;
  protected isDoctorCollapsed = true;
  protected isAddingNewDoctorCollapsed = true;
  protected isAddingPatientCollapsed = true;
  protected isAdditionalInfoCollapsed = true;
  protected isGroupsCollapsed = true;
  protected trial: Trial;
  private trialId: number;

  constructor(private dataService: DataService, private route: ActivatedRoute) { }

  protected getTrial(): void {
    this.dataService.getTrial<Trial>(this.trialId).subscribe((trial: Trial) => {this.trial = trial; console.log(this.trial); });
  }

  private getTrialId(): void {
    this.trialId = +this.route.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.getTrialId();
    this.getTrial();
  }

}

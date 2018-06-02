import { Component, OnInit } from '@angular/core';
import {Trial} from '../Trial';
import {DataService} from '../data.service';

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
  public isAddingExistingDoctorCollapsed = true;
  trial: Trial;
  constructor(private dataService: DataService) { }

  getTrial(): void {
    this.dataService.getTrial().subscribe(trail => this.trial = trail);
  }

  ngOnInit() {
    this.getTrial();
  }

}

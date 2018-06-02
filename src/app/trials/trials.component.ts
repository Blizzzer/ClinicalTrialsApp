import { Component, OnInit } from '@angular/core';
import { DataService} from '../data.service';
import {TrialAbbreviation} from '../TrialAbbreviation';

@Component({
  selector: 'app-trials',
  templateUrl: './trials.component.html',
  styleUrls: ['./trials.component.css']
})
export class TrialsComponent implements OnInit {
  trials: TrialAbbreviation[];
  constructor(private dataService: DataService) {
  }
  getTrials(): void {
    this.dataService.getTrials().subscribe(trailsToChoose => this.trials = trailsToChoose);
  }

  ngOnInit() {
    this.getTrials();
  }

}

import { Component, OnInit } from '@angular/core';
import { DataService} from '../data.service';
import {Trial} from '../DataObjects/Trial';

@Component({
  selector: 'app-trials',
  templateUrl: './trials.component.html',
  styleUrls: ['./trials.component.css']
})
export class TrialsComponent implements OnInit {
  protected trials: Trial[];
  protected showArchived = false;
  protected isAddingTrialCollapsed = true;
  constructor(private dataService: DataService) {
  }
  protected getTrials(): void {
    if (this.showArchived) {
      this.dataService.getTrials<Trial[]>(1).subscribe((data: Trial[]) => {
        this.trials = data;
        console.log(data);
      });
    } else {
      this.dataService.getTrials<Trial[]>(0).subscribe((data: Trial[]) => {
        this.trials = data;
        console.log(data);
      });
    }
  }
  protected onClick() {
    this.showArchived = !this.showArchived;
    this.getTrials();
  }

  ngOnInit() {
    this.getTrials();
  }

}

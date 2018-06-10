import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DataService} from '../data.service';

@Component({
  selector: 'app-danger-zone-trial',
  templateUrl: './danger-zone-trial.component.html',
  styleUrls: ['./danger-zone-trial.component.css']
})
export class DangerZoneTrialComponent implements OnInit {
  private trialId: number;
  constructor(private dataService: DataService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getTrialId();
  }

  protected nextPhase(): void {
    this.dataService.nextPhase(this.trialId);
    window.location.reload();
  }
  protected setArchive(): void {
    this.dataService.setArchive(this.trialId);
     window.location.reload();
  }

  private getTrialId(): void {
    this.trialId = +this.route.snapshot.paramMap.get('id');
  }

}

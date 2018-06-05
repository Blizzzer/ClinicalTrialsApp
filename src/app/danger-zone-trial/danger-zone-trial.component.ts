import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DataService} from '../data.service';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-danger-zone-trial',
  templateUrl: './danger-zone-trial.component.html',
  styleUrls: ['./danger-zone-trial.component.css']
})
export class DangerZoneTrialComponent implements OnInit {
  closeResult: string;
  private trialId: number;
  constructor(private dataService: DataService, private route: ActivatedRoute, private modalService: NgbModal) { }

  ngOnInit() {
    this.getTrialId();
  }

  nextPhase(): void {
    this.dataService.nextPhase(this.trialId);
    window.location.reload();
  }
  setArchive(): void {
    this.dataService.setArchive(this.trialId);
     window.location.reload();
  }

  getTrialId(): void {
    this.trialId = +this.route.snapshot.paramMap.get('id');
  }

}

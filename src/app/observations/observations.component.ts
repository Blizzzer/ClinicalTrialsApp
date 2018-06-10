import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import {ActivatedRoute} from '@angular/router';
import {Observation} from '../DataObjects/Observation';

@Component({
  selector: 'app-observations',
  templateUrl: './observations.component.html',
  styleUrls: ['./observations.component.css']
})
export class ObservationsComponent implements OnInit {
  protected observations: Observation[];
  private patientId: number;
  constructor(private dataService: DataService, private route: ActivatedRoute) { }
  public getObservations(): void {
    this.dataService.getObservations<Observation[]>(this.patientId)
      .subscribe((observationsToChoose: Observation[]) => this.observations = observationsToChoose);
  }
  private getPatientID(): void {
    this.patientId = +this.route.snapshot.paramMap.get('id');
  }
  ngOnInit() {
    this.getPatientID();
    this.getObservations();
  }
}

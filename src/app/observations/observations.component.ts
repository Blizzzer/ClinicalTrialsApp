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
  observations: Observation[];
  patientId: number;
  constructor(private dataService: DataService, private route: ActivatedRoute) { }
  getObservations(): void {
    this.dataService.getObservations<Observation[]>(this.patientId).subscribe((observationsToChoose: Observation[]) => this.observations = observationsToChoose);
  }
  getPatientID(): void {
    this.patientId = +this.route.snapshot.paramMap.get('id');
  }
  ngOnInit() {
    this.getPatientID();
    this.getObservations();
  }
}

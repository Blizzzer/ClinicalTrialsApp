import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import {ObservationAbbreviation} from '../DataObjects/ObservationAbbreviation';

@Component({
  selector: 'app-observations',
  templateUrl: './observations.component.html',
  styleUrls: ['./observations.component.css']
})
export class ObservationsComponent implements OnInit {
  observations: ObservationAbbreviation[];
  constructor(private dataService: DataService) { }
  getObservations(): void {
    this.dataService.getObservations().subscribe(observationsToChoose => this.observations = observationsToChoose);
  }

  ngOnInit() {
    this.getObservations();
  }
}

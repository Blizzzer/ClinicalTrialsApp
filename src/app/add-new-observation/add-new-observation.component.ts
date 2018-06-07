import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import {ActivatedRoute} from '@angular/router';
import {ObservationToSend} from '../DataObjects/ObservationToSend';

@Component({
  selector: 'app-add-new-observation',
  templateUrl: './add-new-observation.component.html',
  styleUrls: ['./add-new-observation.component.css']
})
export class AddNewObservationComponent implements OnInit {
  doctorName: string;
  text: string;
  patientId: number;
  observationToSend: ObservationToSend;
  constructor(private _dataService: DataService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getPatientID();
  }
  getPatientID(): void {
    this.patientId = +this.route.snapshot.paramMap.get('id');
  }
  goAdd() {
    this.observationToSend = new ObservationToSend(this.patientId, this.doctorName, this.text);
    this._dataService.postObservation(this.observationToSend);
  }
}

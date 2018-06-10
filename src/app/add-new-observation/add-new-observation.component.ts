import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DataService} from '../data.service';
import {ActivatedRoute} from '@angular/router';
import {ObservationToSend} from '../DataObjects/ObservationToSend';
import {DosagesComponent} from '../dosages/dosages.component';
import {ObservationsComponent} from '../observations/observations.component';

@Component({
  selector: 'app-add-new-observation',
  templateUrl: './add-new-observation.component.html',
  styleUrls: ['./add-new-observation.component.css']
})
export class AddNewObservationComponent implements OnInit {
  protected doctorName: string;
  protected text: string;
  private patientId: number;
  private observationToSend: ObservationToSend;
  @Output() toggle: EventEmitter<null> = new EventEmitter();
  @Input() observationsList: ObservationsComponent;
  constructor(private _dataService: DataService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getPatientID();
  }
  private getPatientID(): void {
    this.patientId = +this.route.snapshot.paramMap.get('id');
  }
  protected goAdd() {
    if (this.doctorName === '' || this.text === '') {
      alert('Fill all input fields before adding!');
    } else {
      this.observationToSend = new ObservationToSend(this.patientId, this.doctorName, this.text);
      this._dataService.postObservation(this.observationToSend).then((data: null) => this.observationsList.getObservations() );
      this.toggle.emit();
    }
  }
}

import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DataService} from '../data.service';
import {DoctorToSend} from '../DataObjects/DoctorToSend';
import {ActivatedRoute} from '@angular/router';
import {DoctorsComponent} from '../doctors/doctors.component';
import {DosagesComponent} from '../dosages/dosages.component';

@Component({
  selector: 'app-add-new-doctor',
  templateUrl: './add-new-doctor.component.html',
  styleUrls: ['./add-new-doctor.component.css']
})
export class AddNewDoctorComponent implements OnInit {

  @Input() doctorsList: DoctorsComponent;
  protected name: string;
  protected surname: string;
  protected specialisation: string;
  protected ssn: string;
  protected title: string;
  private trialId: number;
  private doctorToSend: DoctorToSend;
  @Output() toggle: EventEmitter<null> = new EventEmitter();
  constructor(private _dataService: DataService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.getTrialId();
  }

  private getTrialId(): void {
    this.trialId = +this.route.snapshot.paramMap.get('id');
  }
  protected goAdd(): void {
    if (this.name === '' || this.surname === '' || this.specialisation === '' || this.ssn === null || this.title === '' ) {
      alert('Fill all input fields before adding!');
    } else {
      this.doctorToSend = new DoctorToSend(this.name, this.surname, this.specialisation, this.title, this.ssn, this.trialId);
      this._dataService.postDoctor(this.doctorToSend).then((data: null) => this.doctorsList.getDoctors() );
      this.toggle.emit();
    }
  }

}

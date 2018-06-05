import {Component, Input, OnInit} from '@angular/core';
import {DataService} from '../data.service';
import {DoctorToSend} from '../DataObjects/DoctorToSend';
import {ActivatedRoute} from '@angular/router';
import {DoctorsComponent} from '../doctors/doctors.component';

@Component({
  selector: 'app-add-new-doctor',
  templateUrl: './add-new-doctor.component.html',
  styleUrls: ['./add-new-doctor.component.css']
})
export class AddNewDoctorComponent implements OnInit {

  @Input() doctorsList: DoctorsComponent;
  name: string;
  surname: string;
  specialisation: string;
  ssn: string;
  title: string;
  trialId: number;
  doctorToSend: DoctorToSend;
  constructor(private _dataService: DataService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.getTrialId();
  }

  getTrialId(): void {
    this.trialId = +this.route.snapshot.paramMap.get('id');
  }
  goAdd(): void {
    this.doctorToSend = new DoctorToSend(this.name, this.surname, this.specialisation, this.title, this.ssn, this.trialId);
    this._dataService.postDoctor(this.doctorToSend);
  }

}

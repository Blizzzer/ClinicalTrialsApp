import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import {Doctor} from '../Doctor';
import {Location} from '@angular/common';

@Component({
  selector: 'app-add-new-doctor',
  templateUrl: './add-new-doctor.component.html',
  styleUrls: ['./add-new-doctor.component.css']
})
export class AddNewDoctorComponent implements OnInit {
  name: string;
  surname: string;
  specialisation: string;
  doctorToSend: Doctor;
  constructor(private _dataService: DataService, private location: Location) { }

  ngOnInit() {
  }
  goAdd(): void {
    this.doctorToSend = new Doctor(this.name, this.surname, this.specialisation);
    this._dataService.postNewDoctor(this.doctorToSend);
  }

}

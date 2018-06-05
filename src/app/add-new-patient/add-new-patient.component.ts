import { Component, OnInit } from '@angular/core';
import {DoctorToSend} from '../DoctorToSend';

@Component({
  selector: 'app-add-new-patient',
  templateUrl: './add-new-patient.component.html',
  styleUrls: ['./add-new-patient.component.css']
})
export class AddNewPatientComponent implements OnInit {
  name: string;
  surname: string;
  specialisation: string;
  ssn: string;
  title: string;
  trialId: number;
  doctorToSend: DoctorToSend;
  constructor() { }

  ngOnInit() {
  }

}

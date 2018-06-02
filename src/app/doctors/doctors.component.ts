import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import {DoctorAbbreviation} from '../DoctorAbbreviation';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css']
})
export class DoctorsComponent implements OnInit {
  doctors: DoctorAbbreviation[];
  constructor(private dataService: DataService) { }
  getDoctors(): void {
    this.dataService.getDoctors().subscribe(doctorsToChoose => this.doctors = doctorsToChoose);
  }

  ngOnInit() {
    this.getDoctors();
  }
}

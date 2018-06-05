import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import {Trial} from '../Trial';
import {ActivatedRoute} from '@angular/router';
import {Doctor} from '../Doctor';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css']
})
export class DoctorsComponent implements OnInit {
  doctors: Doctor[];
  trialId: number;
  constructor(private dataService: DataService, private route: ActivatedRoute) { }
  public getDoctors(): void {
    this.dataService.getDoctors<Doctor[]>(this.trialId).subscribe((doctors: Doctor[]) => this.doctors = doctors);
  }

  getTrialId(): void {
    this.trialId = +this.route.snapshot.paramMap.get('id');
  }
  goUpdate(): void {
    console.log('update made')
    this.getDoctors();
  }

  ngOnInit() {
    this.getTrialId();
    this.getDoctors();
  }
}

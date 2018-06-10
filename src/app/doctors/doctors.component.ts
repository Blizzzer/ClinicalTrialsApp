import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import {ActivatedRoute} from '@angular/router';
import {Doctor} from '../DataObjects/Doctor';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css']
})
export class DoctorsComponent implements OnInit {
  protected doctors: Doctor[];
  private trialId: number;
  constructor(private dataService: DataService, private route: ActivatedRoute) { }
  public getDoctors(): void {
    this.dataService.getDoctors<Doctor[]>(this.trialId).subscribe((doctors: Doctor[]) => {this.doctors = doctors; });
  }

  private getTrialId(): void {
    this.trialId = +this.route.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.getTrialId();
    this.getDoctors();
  }
}

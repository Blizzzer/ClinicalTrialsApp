import { Component, OnInit } from '@angular/core';
import {Dosage} from '../DataObjects/Dosage';
import {ActivatedRoute} from '@angular/router';
import {DataService} from '../data.service';

@Component({
  selector: 'app-dosages',
  templateUrl: './dosages.component.html',
  styleUrls: ['./dosages.component.css']
})
export class DosagesComponent implements OnInit {
  dosages: Dosage[];
  patientId: number;
  constructor(private dataService: DataService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getPatientID();
    this.getDosages();
  }

  getPatientID(): void {
    this.patientId = +this.route.snapshot.paramMap.get('id');
  }
  getDosages(): void {
    this.dataService.getDosages<Dosage[]>(this.patientId).subscribe((dosages: Dosage[]) => this.dosages = dosages);
  }

}

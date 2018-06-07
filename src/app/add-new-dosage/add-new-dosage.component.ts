import { Component, OnInit } from '@angular/core';
import {DosageToSend} from '../DataObjects/DosageToSend';
import {DataService} from '../data.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-add-new-dosage',
  templateUrl: './add-new-dosage.component.html',
  styleUrls: ['./add-new-dosage.component.css']
})
export class AddNewDosageComponent implements OnInit {
  dosage: string;
  dosageToSend: DosageToSend;
  patientId: number;
  constructor(private _dataService: DataService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getPatientID();
  }
  goAdd() {
    this.dosageToSend = new DosageToSend(this.patientId, this.dosage);
    this._dataService.postDosage(this.dosageToSend);
  }
  getPatientID(): void {
    this.patientId = +this.route.snapshot.paramMap.get('id');
  }

}

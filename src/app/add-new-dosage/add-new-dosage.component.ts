import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DosageToSend} from '../DataObjects/DosageToSend';
import {DataService} from '../data.service';
import {ActivatedRoute} from '@angular/router';
import {DosagesComponent} from '../dosages/dosages.component';

@Component({
  selector: 'app-add-new-dosage',
  templateUrl: './add-new-dosage.component.html',
  styleUrls: ['./add-new-dosage.component.css']
})
export class AddNewDosageComponent implements OnInit {
  protected dosage: string;
  private dosageToSend: DosageToSend;
  private patientId: number;
  @Output() toggle: EventEmitter<null> = new EventEmitter();
  @Input() dosagesList: DosagesComponent;
  constructor(private _dataService: DataService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getPatientID();
  }
  protected goAdd() {
    if (this.dosage === '') {
      alert('Fill all input fields before adding!');
    } else {
      this.dosageToSend = new DosageToSend(this.patientId, this.dosage);
      this._dataService.postDosage(this.dosageToSend).then((data: null) => this.dosagesList.getDosages() );
      this.toggle.emit();
    }

  }
  private getPatientID(): void {
    this.patientId = +this.route.snapshot.paramMap.get('id');
  }

}

import { Component, OnInit } from '@angular/core';
import {Password} from '../DataObjects/Password';
import {DataService} from '../data.service';
import {ActivatedRoute} from '@angular/router';
import {ResponseMSG} from '../DataObjects/Response';

@Component({
  selector: 'app-password-input',
  templateUrl: './password-input.component.html',
  styleUrls: ['./password-input.component.css']
})
export class PasswordInputComponent implements OnInit {
  public password: string;
  public passwordObj: Password;
  public trialId: number;
  public response: ResponseMSG;
  constructor(private dataService: DataService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getTrialId();
  }

  getTrialId(): void {
    this.trialId = +this.route.snapshot.paramMap.get('id');
  }

  showGroups(): void {
    this.passwordObj = new Password(this.password, this.trialId);
    this.dataService.showGroups(this.passwordObj).then((response: ResponseMSG) => {alert(response.response); });
  }

}

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
  protected password: string;
  private passwordObj: Password;
  private trialId: number;
  constructor(private dataService: DataService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getTrialId();
  }

  private getTrialId(): void {
    this.trialId = +this.route.snapshot.paramMap.get('id');
  }

  protected showGroups(): void {
    this.passwordObj = new Password(this.password, this.trialId);
    this.dataService.showGroups(this.passwordObj).then((response: ResponseMSG) => {alert(response.response); });
  }

}

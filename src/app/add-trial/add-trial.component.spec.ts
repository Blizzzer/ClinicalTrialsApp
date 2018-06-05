import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTrialComponent } from './add-trial.component';

describe('AddTrialComponent', () => {
  let component: AddTrialComponent;
  let fixture: ComponentFixture<AddTrialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTrialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTrialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

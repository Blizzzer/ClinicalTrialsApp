import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DangerZoneTrialComponent } from './danger-zone-trial.component';

describe('DangerZoneTrialComponent', () => {
  let component: DangerZoneTrialComponent;
  let fixture: ComponentFixture<DangerZoneTrialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DangerZoneTrialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DangerZoneTrialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

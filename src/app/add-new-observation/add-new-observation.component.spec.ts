import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewObservationComponent } from './add-new-observation.component';

describe('AddNewObservationComponent', () => {
  let component: AddNewObservationComponent;
  let fixture: ComponentFixture<AddNewObservationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNewObservationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewObservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

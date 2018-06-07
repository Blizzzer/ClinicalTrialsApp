import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewDosageComponent } from './add-new-dosage.component';

describe('AddNewDosageComponent', () => {
  let component: AddNewDosageComponent;
  let fixture: ComponentFixture<AddNewDosageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNewDosageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewDosageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

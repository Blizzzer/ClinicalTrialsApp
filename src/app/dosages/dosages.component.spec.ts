import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DosagesComponent } from './dosages.component';

describe('DosagesComponent', () => {
  let component: DosagesComponent;
  let fixture: ComponentFixture<DosagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DosagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DosagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

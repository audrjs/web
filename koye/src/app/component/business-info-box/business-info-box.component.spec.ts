import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessInfoBoxComponent } from './business-info-box.component';

describe('BusinessInfoBoxComponent', () => {
  let component: BusinessInfoBoxComponent;
  let fixture: ComponentFixture<BusinessInfoBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinessInfoBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessInfoBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

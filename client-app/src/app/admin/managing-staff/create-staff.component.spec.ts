import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagingStaffComponent } from './create-staff.component';

describe('ManagingStaffComponent', () => {
  let component: ManagingStaffComponent;
  let fixture: ComponentFixture<ManagingStaffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagingStaffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagingStaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

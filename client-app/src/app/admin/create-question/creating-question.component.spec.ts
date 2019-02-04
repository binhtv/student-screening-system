import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatingExamComponent } from './creating-question.component';

describe('CreatingExamComponent', () => {
  let component: CreatingExamComponent;
  let fixture: ComponentFixture<CreatingExamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatingExamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatingExamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

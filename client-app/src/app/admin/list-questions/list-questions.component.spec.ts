import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListquestionsComponent } from './list-questions.component';

describe('ListquestionsComponent', () => {
  let component: ListquestionsComponent;
  let fixture: ComponentFixture<ListquestionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListquestionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListquestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

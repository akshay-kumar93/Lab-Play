import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamHomeComponent } from './exam-home.component';

describe('ExamHomeComponent', () => {
  let component: ExamHomeComponent;
  let fixture: ComponentFixture<ExamHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExamHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExamHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

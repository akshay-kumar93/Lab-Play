import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabRoomComponent } from './lab-room.component';

describe('LabRoomComponent', () => {
  let component: LabRoomComponent;
  let fixture: ComponentFixture<LabRoomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LabRoomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LabRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

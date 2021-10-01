import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeafyGreenNotesComponent } from './leafy-green-notes.component';

describe('LeafyGreenNotesComponent', () => {
  let component: LeafyGreenNotesComponent;
  let fixture: ComponentFixture<LeafyGreenNotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeafyGreenNotesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeafyGreenNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

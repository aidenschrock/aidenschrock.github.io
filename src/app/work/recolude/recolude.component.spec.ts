import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecoludeComponent } from './recolude.component';

describe('RecoludeComponent', () => {
  let component: RecoludeComponent;
  let fixture: ComponentFixture<RecoludeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecoludeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecoludeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

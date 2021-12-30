import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmmcoComponent } from './ammco.component';

describe('AmmcoComponent', () => {
  let component: AmmcoComponent;
  let fixture: ComponentFixture<AmmcoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmmcoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmmcoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

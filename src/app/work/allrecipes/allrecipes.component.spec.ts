import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllrecipesComponent } from './allrecipes.component';

describe('AllrecipesComponent', () => {
  let component: AllrecipesComponent;
  let fixture: ComponentFixture<AllrecipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllrecipesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllrecipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

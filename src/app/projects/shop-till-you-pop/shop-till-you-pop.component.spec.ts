import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopTillYouPopComponent } from './shop-till-you-pop.component';

describe('ShopTillYouPopComponent', () => {
  let component: ShopTillYouPopComponent;
  let fixture: ComponentFixture<ShopTillYouPopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopTillYouPopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopTillYouPopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

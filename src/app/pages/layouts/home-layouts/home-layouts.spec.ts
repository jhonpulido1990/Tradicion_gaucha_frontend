import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeLayouts } from './home-layouts';

describe('HomeLayouts', () => {
  let component: HomeLayouts;
  let fixture: ComponentFixture<HomeLayouts>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeLayouts]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeLayouts);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

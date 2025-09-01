import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeacturePills } from './feacture-pills';

describe('FeacturePills', () => {
  let component: FeacturePills;
  let fixture: ComponentFixture<FeacturePills>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeacturePills]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeacturePills);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

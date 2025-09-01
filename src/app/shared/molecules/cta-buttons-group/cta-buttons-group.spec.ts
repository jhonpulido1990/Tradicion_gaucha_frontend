import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CtaButtonsGroup } from './cta-buttons-group';

describe('CtaButtonsGroup', () => {
  let component: CtaButtonsGroup;
  let fixture: ComponentFixture<CtaButtonsGroup>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CtaButtonsGroup]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CtaButtonsGroup);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

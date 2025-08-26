import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterContactInfo } from './footer-contact-info';

describe('FooterContactInfo', () => {
  let component: FooterContactInfo;
  let fixture: ComponentFixture<FooterContactInfo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterContactInfo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterContactInfo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

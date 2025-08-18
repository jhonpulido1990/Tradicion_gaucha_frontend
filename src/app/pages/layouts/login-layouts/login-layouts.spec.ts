import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginLayouts } from './login-layouts';

describe('LoginLayouts', () => {
  let component: LoginLayouts;
  let fixture: ComponentFixture<LoginLayouts>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginLayouts]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginLayouts);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

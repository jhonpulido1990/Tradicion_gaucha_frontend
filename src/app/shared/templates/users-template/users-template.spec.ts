import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersTemplate } from './users-template';

describe('UsersTemplate', () => {
  let component: UsersTemplate;
  let fixture: ComponentFixture<UsersTemplate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsersTemplate]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsersTemplate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

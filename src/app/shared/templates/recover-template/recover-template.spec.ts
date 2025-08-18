import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecoverTemplate } from './recover-template';

describe('RecoverTemplate', () => {
  let component: RecoverTemplate;
  let fixture: ComponentFixture<RecoverTemplate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecoverTemplate]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecoverTemplate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

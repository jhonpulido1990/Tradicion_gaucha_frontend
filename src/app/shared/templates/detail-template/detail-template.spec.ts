import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailTemplate } from './detail-template';

describe('DetailTemplate', () => {
  let component: DetailTemplate;
  let fixture: ComponentFixture<DetailTemplate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailTemplate]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailTemplate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

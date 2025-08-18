import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesTemplate } from './categories-template';

describe('CategoriesTemplate', () => {
  let component: CategoriesTemplate;
  let fixture: ComponentFixture<CategoriesTemplate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoriesTemplate]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoriesTemplate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

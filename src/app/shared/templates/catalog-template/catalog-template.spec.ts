import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogTemplate } from './catalog-template';

describe('CatalogTemplate', () => {
  let component: CatalogTemplate;
  let fixture: ComponentFixture<CatalogTemplate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CatalogTemplate]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatalogTemplate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

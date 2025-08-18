import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WishlistTemplate } from './wishlist-template';

describe('WishlistTemplate', () => {
  let component: WishlistTemplate;
  let fixture: ComponentFixture<WishlistTemplate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WishlistTemplate]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WishlistTemplate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

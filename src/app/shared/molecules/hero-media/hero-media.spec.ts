import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroMedia } from './hero-media';

describe('HeroMedia', () => {
  let component: HeroMedia;
  let fixture: ComponentFixture<HeroMedia>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroMedia]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroMedia);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

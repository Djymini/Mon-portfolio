import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeArticle } from './home-article';

describe('HomeArticle', () => {
  let component: HomeArticle;
  let fixture: ComponentFixture<HomeArticle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeArticle]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeArticle);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

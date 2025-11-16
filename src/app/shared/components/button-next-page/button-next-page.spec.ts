import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonNextPage } from './button-next-page';

describe('ButtonNextPage', () => {
  let component: ButtonNextPage;
  let fixture: ComponentFixture<ButtonNextPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonNextPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonNextPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

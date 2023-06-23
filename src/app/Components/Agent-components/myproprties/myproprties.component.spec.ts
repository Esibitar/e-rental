import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyproprtiesComponent } from './myproprties.component';

describe('MyproprtiesComponent', () => {
  let component: MyproprtiesComponent;
  let fixture: ComponentFixture<MyproprtiesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyproprtiesComponent]
    });
    fixture = TestBed.createComponent(MyproprtiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManiComponent } from './mani.component';

describe('ManiComponent', () => {
  let component: ManiComponent;
  let fixture: ComponentFixture<ManiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManiComponent]
    });
    fixture = TestBed.createComponent(ManiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

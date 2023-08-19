import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JeevaComponent } from './jeeva.component';

describe('JeevaComponent', () => {
  let component: JeevaComponent;
  let fixture: ComponentFixture<JeevaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JeevaComponent]
    });
    fixture = TestBed.createComponent(JeevaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

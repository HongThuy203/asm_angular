import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HonmePageComponent } from './honme-page.component';

describe('HonmePageComponent', () => {
  let component: HonmePageComponent;
  let fixture: ComponentFixture<HonmePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HonmePageComponent]
    });
    fixture = TestBed.createComponent(HonmePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

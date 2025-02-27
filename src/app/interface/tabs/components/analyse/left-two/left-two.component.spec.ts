import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftTwoComponent } from './left-two.component';

describe('LeftTwoComponent', () => {
  let component: LeftTwoComponent;
  let fixture: ComponentFixture<LeftTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeftTwoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeftTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

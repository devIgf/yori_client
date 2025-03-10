import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftFourComponent } from './left-four.component';

describe('LeftFourComponent', () => {
  let component: LeftFourComponent;
  let fixture: ComponentFixture<LeftFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeftFourComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeftFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

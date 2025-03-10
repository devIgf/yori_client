import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftTreeComponent } from './left-tree.component';

describe('LeftTreeComponent', () => {
  let component: LeftTreeComponent;
  let fixture: ComponentFixture<LeftTreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeftTreeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeftTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

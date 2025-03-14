import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceClientComponent } from './contacter-equipe.component';

describe('ServiceClientComponent', () => {
  let component: ServiceClientComponent;
  let fixture: ComponentFixture<ServiceClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceClientComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

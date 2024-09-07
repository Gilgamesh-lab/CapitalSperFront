import { ComponentFixture, TestBed } from '@angular/core/testing';

import { carteFormComponent } from './carte-form.component';

describe('carteFormComponent', () => {
  let component: carteFormComponent;
  let fixture: ComponentFixture<carteFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [carteFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(carteFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

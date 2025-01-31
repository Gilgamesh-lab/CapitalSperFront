import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapitalSperComponent } from './capital-sper.component';

describe('CapitalSperComponent', () => {
  let component: CapitalSperComponent;
  let fixture: ComponentFixture<CapitalSperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CapitalSperComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CapitalSperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

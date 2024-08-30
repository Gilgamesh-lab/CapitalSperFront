import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypesDePouvoirsComponent } from './types-de-pouvoirs.component';

describe('TypesDePouvoirsComponent', () => {
  let component: TypesDePouvoirsComponent;
  let fixture: ComponentFixture<TypesDePouvoirsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TypesDePouvoirsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypesDePouvoirsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

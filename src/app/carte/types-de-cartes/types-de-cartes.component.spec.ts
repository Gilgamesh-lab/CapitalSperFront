import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypesDeCartesComponent } from './types-de-cartes.component';

describe('TypesDeCartesComponent', () => {
  let component: TypesDeCartesComponent;
  let fixture: ComponentFixture<TypesDeCartesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TypesDeCartesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypesDeCartesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

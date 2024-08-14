import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListePersonnageComponent } from './liste-personnage.component';

describe('ListePersonnageComponent', () => {
  let component: ListePersonnageComponent;
  let fixture: ComponentFixture<ListePersonnageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListePersonnageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListePersonnageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

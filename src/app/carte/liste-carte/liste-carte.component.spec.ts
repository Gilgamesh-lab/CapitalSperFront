import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListecarteComponent } from './liste-carte.component';

describe('ListecarteComponent', () => {
  let component: ListecarteComponent;
  let fixture: ComponentFixture<ListecarteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListecarteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListecarteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

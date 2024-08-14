import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailPersonnageComponent } from './detail-personnage.component';

describe('DetailPersonnageComponent', () => {
  let component: DetailPersonnageComponent;
  let fixture: ComponentFixture<DetailPersonnageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailPersonnageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailPersonnageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

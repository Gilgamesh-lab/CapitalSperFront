import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailcarteComponent } from './detail-carte.component';

describe('DetailcarteComponent', () => {
  let component: DetailcarteComponent;
  let fixture: ComponentFixture<DetailcarteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailcarteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailcarteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

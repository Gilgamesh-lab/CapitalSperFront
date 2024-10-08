import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampsComponent } from './camps.component';

describe('CampsComponent', () => {
  let component: CampsComponent;
  let fixture: ComponentFixture<CampsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CampsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CampsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

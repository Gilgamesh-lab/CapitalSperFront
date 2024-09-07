import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditcarteComponent } from './edit-carte.component';

describe('EditcarteComponent', () => {
  let component: EditcarteComponent;
  let fixture: ComponentFixture<EditcarteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditcarteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditcarteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

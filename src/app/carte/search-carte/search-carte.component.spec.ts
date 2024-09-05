import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchcarteComponent } from './search-carte.component';

describe('SearchcarteComponent', () => {
  let component: SearchcarteComponent;
  let fixture: ComponentFixture<SearchcarteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchcarteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchcarteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

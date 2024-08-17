import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchPersonnageComponent } from './search-personnage.component';

describe('SearchPersonnageComponent', () => {
  let component: SearchPersonnageComponent;
  let fixture: ComponentFixture<SearchPersonnageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchPersonnageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchPersonnageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

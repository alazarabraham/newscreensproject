import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterStreamTableComponent } from './filter-stream-table.component';

describe('FilterStreamTableComponent', () => {
  let component: FilterStreamTableComponent;
  let fixture: ComponentFixture<FilterStreamTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterStreamTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterStreamTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterRdbmsTablesComponent } from './filter-rdbms-tables.component';

describe('FilterRdbmsTablesComponent', () => {
  let component: FilterRdbmsTablesComponent;
  let fixture: ComponentFixture<FilterRdbmsTablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterRdbmsTablesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterRdbmsTablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

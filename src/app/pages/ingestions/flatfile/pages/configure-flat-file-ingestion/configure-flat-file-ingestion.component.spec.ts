import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigureFlatFileIngestionComponent } from './configure-flat-file-ingestion.component';

describe('ConfigureFlatFileIngestionComponent', () => {
  let component: ConfigureFlatFileIngestionComponent;
  let fixture: ComponentFixture<ConfigureFlatFileIngestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfigureFlatFileIngestionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigureFlatFileIngestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

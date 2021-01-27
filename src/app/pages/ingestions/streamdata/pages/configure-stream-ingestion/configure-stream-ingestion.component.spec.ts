import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigureStreamIngestionComponent } from './configure-stream-ingestion.component';

describe('ConfigureStreamIngestionComponent', () => {
  let component: ConfigureStreamIngestionComponent;
  let fixture: ComponentFixture<ConfigureStreamIngestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfigureStreamIngestionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigureStreamIngestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

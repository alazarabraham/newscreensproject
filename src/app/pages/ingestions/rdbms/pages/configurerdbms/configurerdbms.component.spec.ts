import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigurerdbmsComponent } from './configurerdbms.component';

describe('ConfigurerdbmsComponent', () => {
  let component: ConfigurerdbmsComponent;
  let fixture: ComponentFixture<ConfigurerdbmsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfigurerdbmsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigurerdbmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

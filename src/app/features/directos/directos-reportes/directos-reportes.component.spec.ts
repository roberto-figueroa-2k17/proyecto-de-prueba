import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectosReportesComponent } from './directos-reportes.component';

describe('DirectosReportesComponent', () => {
  let component: DirectosReportesComponent;
  let fixture: ComponentFixture<DirectosReportesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DirectosReportesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DirectosReportesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

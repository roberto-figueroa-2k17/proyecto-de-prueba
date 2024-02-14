import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CedisReportesComponent } from './cedis-reportes.component';

describe('CedisReportesComponent', () => {
  let component: CedisReportesComponent;
  let fixture: ComponentFixture<CedisReportesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CedisReportesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CedisReportesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

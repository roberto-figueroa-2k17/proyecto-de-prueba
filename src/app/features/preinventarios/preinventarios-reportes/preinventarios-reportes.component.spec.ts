import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreinventariosReportesComponent } from './preinventarios-reportes.component';

describe('PreinventariosReportesComponent', () => {
  let component: PreinventariosReportesComponent;
  let fixture: ComponentFixture<PreinventariosReportesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PreinventariosReportesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PreinventariosReportesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

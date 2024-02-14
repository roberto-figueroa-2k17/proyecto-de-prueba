import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CedisRecepcionDeTransferenciasYDevolucionesComponent } from './cedis-recepcion-de-transferencias-y-devoluciones.component';

describe('CedisRecepcionDeTransferenciasYDevolucionesComponent', () => {
  let component: CedisRecepcionDeTransferenciasYDevolucionesComponent;
  let fixture: ComponentFixture<CedisRecepcionDeTransferenciasYDevolucionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CedisRecepcionDeTransferenciasYDevolucionesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CedisRecepcionDeTransferenciasYDevolucionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

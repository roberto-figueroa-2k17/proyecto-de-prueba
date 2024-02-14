import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectosComprobantesDeCompraComponent } from './directos-comprobantes-de-compra.component';

describe('DirectosComprobantesDeCompraComponent', () => {
  let component: DirectosComprobantesDeCompraComponent;
  let fixture: ComponentFixture<DirectosComprobantesDeCompraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DirectosComprobantesDeCompraComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DirectosComprobantesDeCompraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

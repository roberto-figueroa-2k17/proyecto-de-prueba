import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreinventariosGraficasComponent } from './preinventarios-graficas.component';

describe('PreinventariosGraficasComponent', () => {
  let component: PreinventariosGraficasComponent;
  let fixture: ComponentFixture<PreinventariosGraficasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PreinventariosGraficasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PreinventariosGraficasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

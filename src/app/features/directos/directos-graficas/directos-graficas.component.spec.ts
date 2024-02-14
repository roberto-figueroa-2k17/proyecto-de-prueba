import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectosGraficasComponent } from './directos-graficas.component';

describe('DirectosGraficasComponent', () => {
  let component: DirectosGraficasComponent;
  let fixture: ComponentFixture<DirectosGraficasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DirectosGraficasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DirectosGraficasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

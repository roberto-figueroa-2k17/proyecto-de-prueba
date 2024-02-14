import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CedisGraficasComponent } from './cedis-graficas.component';

describe('CedisGraficasComponent', () => {
  let component: CedisGraficasComponent;
  let fixture: ComponentFixture<CedisGraficasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CedisGraficasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CedisGraficasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

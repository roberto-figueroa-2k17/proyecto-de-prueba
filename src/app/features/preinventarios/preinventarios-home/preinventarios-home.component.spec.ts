import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreinventariosHomeComponent } from './preinventarios-home.component';

describe('PreinventariosHomeComponent', () => {
  let component: PreinventariosHomeComponent;
  let fixture: ComponentFixture<PreinventariosHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PreinventariosHomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PreinventariosHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

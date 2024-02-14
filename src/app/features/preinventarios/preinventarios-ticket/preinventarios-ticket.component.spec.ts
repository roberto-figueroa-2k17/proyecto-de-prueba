import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreinventariosTicketComponent } from './preinventarios-ticket.component';

describe('PreinventariosTicketComponent', () => {
  let component: PreinventariosTicketComponent;
  let fixture: ComponentFixture<PreinventariosTicketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PreinventariosTicketComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PreinventariosTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

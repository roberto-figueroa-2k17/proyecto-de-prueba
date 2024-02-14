import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectosHomeComponent } from './directos-home.component';

describe('DirectosHomeComponent', () => {
  let component: DirectosHomeComponent;
  let fixture: ComponentFixture<DirectosHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DirectosHomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DirectosHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

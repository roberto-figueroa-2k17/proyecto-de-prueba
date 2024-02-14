import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CedisHomeComponent } from './cedis-home.component';

describe('CedisHomeComponent', () => {
  let component: CedisHomeComponent;
  let fixture: ComponentFixture<CedisHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CedisHomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CedisHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

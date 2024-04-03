import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnregistrervoyageComponent } from './enregistrervoyage.component';

describe('EnregistrervoyageComponent', () => {
  let component: EnregistrervoyageComponent;
  let fixture: ComponentFixture<EnregistrervoyageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnregistrervoyageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EnregistrervoyageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

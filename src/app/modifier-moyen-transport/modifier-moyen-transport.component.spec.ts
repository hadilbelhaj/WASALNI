import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierMoyenTransportComponent } from './modifier-moyen-transport.component';

describe('ModifierMoyenTransportComponent', () => {
  let component: ModifierMoyenTransportComponent;
  let fixture: ComponentFixture<ModifierMoyenTransportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModifierMoyenTransportComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModifierMoyenTransportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

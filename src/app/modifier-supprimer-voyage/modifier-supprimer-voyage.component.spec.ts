import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierSupprimerVoyageComponent } from './modifier-supprimer-voyage.component';

describe('ModifierSupprimerVoyageComponent', () => {
  let component: ModifierSupprimerVoyageComponent;
  let fixture: ComponentFixture<ModifierSupprimerVoyageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModifierSupprimerVoyageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModifierSupprimerVoyageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

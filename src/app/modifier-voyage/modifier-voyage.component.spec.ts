import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierVoyageComponent } from './modifier-voyage.component';

describe('ModifierVoyageComponent', () => {
  let component: ModifierVoyageComponent;
  let fixture: ComponentFixture<ModifierVoyageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModifierVoyageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModifierVoyageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

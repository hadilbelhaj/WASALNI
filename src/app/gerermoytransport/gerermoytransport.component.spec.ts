import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GerermoytransportComponent } from './gerermoytransport.component';

describe('GerermoytransportComponent', () => {
  let component: GerermoytransportComponent;
  let fixture: ComponentFixture<GerermoytransportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GerermoytransportComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GerermoytransportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

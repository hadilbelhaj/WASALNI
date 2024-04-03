import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutmoyentransportComponent } from './ajoutmoyentransport.component';

describe('AjoutmoyentransportComponent', () => {
  let component: AjoutmoyentransportComponent;
  let fixture: ComponentFixture<AjoutmoyentransportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AjoutmoyentransportComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AjoutmoyentransportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

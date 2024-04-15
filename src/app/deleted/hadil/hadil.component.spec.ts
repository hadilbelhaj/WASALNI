import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HadilComponent } from './hadil.component';

describe('HadilComponent', () => {
  let component: HadilComponent;
  let fixture: ComponentFixture<HadilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HadilComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HadilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

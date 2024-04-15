import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsulterVoyageComponent } from './consulter-voyage.component';

describe('ConsulterVoyageComponent', () => {
  let component: ConsulterVoyageComponent;
  let fixture: ComponentFixture<ConsulterVoyageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsulterVoyageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConsulterVoyageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

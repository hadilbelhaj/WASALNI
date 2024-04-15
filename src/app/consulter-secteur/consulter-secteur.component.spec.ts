import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsulterSecteurComponent } from './consulter-secteur.component';

describe('ConsulterSecteurComponent', () => {
  let component: ConsulterSecteurComponent;
  let fixture: ComponentFixture<ConsulterSecteurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsulterSecteurComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConsulterSecteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

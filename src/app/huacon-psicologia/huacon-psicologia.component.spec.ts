import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HuaconPsicologiaComponent } from './huacon-psicologia.component';

describe('HuaconPsicologiaComponent', () => {
  let component: HuaconPsicologiaComponent;
  let fixture: ComponentFixture<HuaconPsicologiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HuaconPsicologiaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HuaconPsicologiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HuaconPsicologiaCitasComponent } from './huacon-psicologia-citas.component';

describe('HuaconPsicologiaCitasComponent', () => {
  let component: HuaconPsicologiaCitasComponent;
  let fixture: ComponentFixture<HuaconPsicologiaCitasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HuaconPsicologiaCitasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HuaconPsicologiaCitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

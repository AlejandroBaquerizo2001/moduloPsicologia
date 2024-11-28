import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HuaconPsicologiaEvaluacionesComponent } from './huacon-psicologia-evaluaciones.component';

describe('HuaconPsicologiaEvaluacionesComponent', () => {
  let component: HuaconPsicologiaEvaluacionesComponent;
  let fixture: ComponentFixture<HuaconPsicologiaEvaluacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HuaconPsicologiaEvaluacionesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HuaconPsicologiaEvaluacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

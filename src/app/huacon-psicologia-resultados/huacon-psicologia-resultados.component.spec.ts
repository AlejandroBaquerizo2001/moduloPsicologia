import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HuaconPsicologiaResultadosComponent } from './huacon-psicologia-resultados.component';

describe('HuaconPsicologiaResultadosComponent', () => {
  let component: HuaconPsicologiaResultadosComponent;
  let fixture: ComponentFixture<HuaconPsicologiaResultadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HuaconPsicologiaResultadosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HuaconPsicologiaResultadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

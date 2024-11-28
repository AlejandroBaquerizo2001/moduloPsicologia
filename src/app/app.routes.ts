import { Routes } from '@angular/router';


import { HuaconPsicologiaComponent } from './huacon-psicologia/huacon-psicologia.component';
import { HuaconPsicologiaCitasComponent } from './huacon-psicologia-citas/huacon-psicologia-citas.component';
import { HuaconPsicologiaEvaluacionesComponent } from './huacon-psicologia-evaluaciones/huacon-psicologia-evaluaciones.component';
import { HuaconPsicologiaResultadosComponent } from './huacon-psicologia-resultados/huacon-psicologia-resultados.component';

export const routes: Routes = [

  {path: '',  component: HuaconPsicologiaComponent},
  {path: 'huacon-psicologia-citas', component: HuaconPsicologiaCitasComponent},
  {path: 'huacon-psicologia-evaluaciones',  component: HuaconPsicologiaEvaluacionesComponent},
  {path: 'huacon-psicologia-resultados', component: HuaconPsicologiaResultadosComponent}
];

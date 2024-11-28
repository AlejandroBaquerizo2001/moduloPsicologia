import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Evaluacion {
  id: number;
  nombre: string;
  descripcion: string;
  fecha: string;
}

@Component({
  selector: 'app-huacon-psicologia-evaluaciones',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './huacon-psicologia-evaluaciones.component.html',
  styleUrl: './huacon-psicologia-evaluaciones.component.css'
})
export class HuaconPsicologiaEvaluacionesComponent {
  evaluaciones: Evaluacion[] = [];
  nuevoEvaluacion: Evaluacion = { id: 0, nombre: '', descripcion: '', fecha: '' };
  editarIndex: number | null = null;

  agregarEvaluacion() {
    if (this.nuevoEvaluacion.nombre && this.nuevoEvaluacion.descripcion && this.nuevoEvaluacion.fecha) {
      if (this.editarIndex !== null) {
        this.evaluaciones[this.editarIndex] = { ...this.nuevoEvaluacion, id: this.evaluaciones[this.editarIndex].id };
        this.editarIndex = null; // Reiniciar el índice de edición
      } else {
        this.nuevoEvaluacion.id = this.evaluaciones.length + 1; // Asignar un ID único
        this.evaluaciones.push({ ...this.nuevoEvaluacion });
      }
      this.nuevoEvaluacion = { id: 0, nombre: '', descripcion: '', fecha: '' }; // Reiniciar formulario
    }
  }

  editarEvaluacion(index: number) {
    this.nuevoEvaluacion = { ...this.evaluaciones[index] };
    this.editarIndex = index; // Guardar el índice del registro que se está editando
  }

  eliminarEvaluacion(index: number) {
    this.evaluaciones.splice(index, 1);
  }
}

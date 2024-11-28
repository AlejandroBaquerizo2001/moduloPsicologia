import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Registro {
  nombre: string;
  email: string;
  doctor: string;
  fecha: string;
  hora: string;
}

@Component({
  selector: 'app-huacon-psicologia-citas',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './huacon-psicologia-citas.component.html',
  styleUrl: './huacon-psicologia-citas.component.css'
})
export class HuaconPsicologiaCitasComponent {
  registros: Registro[] = [];
  nuevoRegistro: Registro = { nombre: '', email: '', doctor: '', fecha: '', hora: '' };
  editarIndex: number | null = null;

  agregarRegistro() {
    if (this.nuevoRegistro.nombre && this.nuevoRegistro.email && this.nuevoRegistro.doctor && this.nuevoRegistro.fecha && this.nuevoRegistro.hora) {
      if (this.editarIndex !== null) {
        this.registros[this.editarIndex] = { ...this.nuevoRegistro };
        this.editarIndex = null; // Reiniciar el índice de edición
      } else {
        this.registros.push({ ...this.nuevoRegistro });
      }
      this.nuevoRegistro = { nombre: '', email: '', doctor: '', fecha: '', hora: '' }; // Reiniciar formulario
    }
  }

  editarRegistro(index: number) {
    this.nuevoRegistro = { ...this.registros[index] };
    this.editarIndex = index; // Guardar el índice del registro que se está editando
  }

  eliminarRegistro(index: number) {
    this.registros.splice(index, 1);
  }
}

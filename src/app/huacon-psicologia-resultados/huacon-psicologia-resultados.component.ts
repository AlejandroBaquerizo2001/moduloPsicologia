import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PdfViewerModule } from 'ng2-pdf-viewer';

interface Document {
  name: string;
  url: string;
}

@Component({
  selector: 'app-huacon-psicologia-resultados',
  standalone: true,
  imports: [FormsModule, PdfViewerModule],
  templateUrl: './huacon-psicologia-resultados.component.html',
  styleUrl: './huacon-psicologia-resultados.component.css'
})
export class HuaconPsicologiaResultadosComponent {
  documents: Document[] = [
    { name: 'Documento 1', url: 'ruta/a/documento1.pdf' },
    { name: 'Documento 2', url: 'ruta/a/documento2.pdf' },
    { name: 'Documento 3', url: 'ruta/a/documento3.pdf' },
    // Agrega más documentos según sea necesario
  ];

  filteredDocuments: Document[] = [...this.documents];
  searchTerm: string = '';
  pdfSrc: string = '';

  filterDocuments() {
    this.filteredDocuments = this.documents.filter(doc =>
      doc.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  openPdf(url: string) {
    this.pdfSrc = url;
  }
}

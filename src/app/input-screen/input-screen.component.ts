import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-input-screen',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './input-screen.component.html',
  styleUrl: './input-screen.component.css'
})
export class InputScreenComponent {
  documentType: string = '';
  documentNumber: string = '';
  documentNumberInvalid: boolean = false;

  constructor(private router: Router) { }

  get formValid(): boolean {
    return !!this.documentType && !!this.documentNumber && !this.documentNumberInvalid;
  }

  validateDocumentNumber(): void {
    const regex = /^[0-9]{8,11}$/;
    this.documentNumberInvalid = !regex.test(this.documentNumber);
  }

  onSearch(): void {
    // Redirige a la pantalla de resumen
    this.router.navigate(['/summary'], { queryParams: { type: this.documentType, number: this.documentNumber } });
  }

}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-combi-checker',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatListModule
  ],
  templateUrl: './combi-checker.component.html',
  styleUrl: './combi-checker.component.scss'
})
export class CombiCheckerComponent {
  A: number[] = [];
  B: number[] = [];
  newAValue: number | null = null;
  newBValue: number | null = null;

  result: number | null = null;
  totalTested: number = 0;
  validCombinations: number[][] = [];

  ajouterA(): void {
    if (this.newAValue !== null && !isNaN(this.newAValue)) {
      this.A.push(this.newAValue);
      this.newAValue = null;
    }
  }

  ajouterB(): void {
    if (this.newBValue !== null && !isNaN(this.newBValue)) {
      this.B.push(this.newBValue);
      this.newBValue = null;
    }
  }

  calculer(): void {
    const setB = new Set(this.B);
    this.validCombinations = [];
    this.totalTested = 0;

    // Combinaisons de 2
    for (let i = 0; i < this.A.length; i++) {
      for (let j = i + 1; j < this.A.length; j++) {
        this.totalTested++;
        const sum2 = this.A[i] + this.A[j];
        if (setB.has(sum2)) {
          this.validCombinations.push([this.A[i], this.A[j]]);
        }
      }
    }

    // Combinaisons de 3
    for (let i = 0; i < this.A.length; i++) {
      for (let j = i + 1; j < this.A.length; j++) {
        for (let k = j + 1; k < this.A.length; k++) {
          this.totalTested++;
          const sum3 = this.A[i] + this.A[j] + this.A[k];
          if (setB.has(sum3)) {
            this.validCombinations.push([this.A[i], this.A[j], this.A[k]]);
          }
        }
      }
    }

    this.result = this.validCombinations.length;
  }

  get displayCombinations(): string[] {
    return this.validCombinations.map(combo => combo.join(' + ') + ' = ' + combo.reduce((a, b) => a + b, 0));
  }
}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-info-etablissement',
  standalone: true,
  imports: [
    CommonModule,
    MatIcon,
    FormsModule
  ],
  templateUrl: './info-etablissement.component.html',
  styleUrl: './info-etablissement.component.css'
})
export class InfoEtablissementComponent {

  // showDetails: boolean = false;
  afficherDetails() {
    this.showDetails = !this.showDetails;
  }
  showDetails = false; // Variable pour afficher ou non le bloc
  status = 'actif'; // Définir le statut par défaut sur "actif"

    afficherDetails2() {
        this.showDetails = !this.showDetails; // Bascule l'affichage des détails
    }


}

import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatTab, MatTabGroup, MatTabsModule } from '@angular/material/tabs';
import { Footer2Component } from '../../layout/footer2/footer2.component';
import { AnalyseComponent } from './components/analyse/analyse.component';
import { BoiteReceptionComponent } from './components/boite-reception/boite-reception.component';
import { CommentairesComponent } from './components/commentaires/commentaires.component';
import { EquipementServiceComponent } from './components/equipement-service/equipement-service.component';
import { FacturesComponent } from './components/factures/factures.component';
import { HebergementsComponent } from './components/hebergements/hebergements.component';
import { InfoEtablissementComponent } from './components/info-etablissement/info-etablissement.component';
import { PhotoEtablissementComponent } from './components/photo-etablisssement/photo-etablisssement.component';
import { ReservationComponent } from './components/reservation/reservation.component';
import { TypeComponent } from './components/type/type.component';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-tabs',
  standalone: true,
  imports: [
    MatTab,
    MatTabGroup,
    MatTabsModule,
    CommonModule,
    MatIcon,
    ReservationComponent,
    BoiteReceptionComponent,
    CommentairesComponent,
    AnalyseComponent,
    Footer2Component,
    FacturesComponent,
    FormsModule
],
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.css'
})
export class TabsComponent implements AfterViewInit{

  activeTabIndex: number = 0; // Index par défaut pour les onglets
  currentComponent: string | null = null; // Composant actuellement sélectionné

  ngOnInit() {
    this.currentComponent = 'composant1'; // Option par défaut
    this.isOptionSelected = true;
    // Récupérer l'index de l'onglet actif et le composant sélectionné depuis le sessionStorage
    const storedIndex = sessionStorage.getItem('activeTabIndex');
    const storedComponent = sessionStorage.getItem('currentComponent');

    if (storedIndex) {
      this.activeTabIndex = +storedIndex; 
    }

    if (storedComponent) {
      this.currentComponent = storedComponent; 
    }
  }

  onTabChange(event: any) {
    this.activeTabIndex = event.index; 
    sessionStorage.setItem('activeTabIndex', this.activeTabIndex.toString());
  }

  showComponent(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    const selectedValue = selectElement.value;
  
    if (selectedValue) {
      this.currentComponent = selectedValue;
      this.isOptionSelected = true; // Une option valide est sélectionnée
    } else {
      this.isOptionSelected = false; // Aucune option valide n'est sélectionnée
    }
  }

  ngAfterViewInit(): void {
    throw new Error('Method not implemented.');
  }
  @ViewChild(MatTabGroup) tabGroup!: MatTabGroup;


  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  openSelect(select: HTMLSelectElement) {
    select.focus();
    select.click();
  }

  options = [
    { value: 'composant1', label: 'info sur l\'établissement' },
    { value: 'composant2', label: 'type d\'établissement' },
    { value: 'composant3', label: 'photos' },
    { value: 'composant4', label: 'équipement et service' },
    { value: 'composant5', label: 'hébergement' },
  ];

  isOptionSelected: boolean = false; 

  componentMap: { [key: string]: any } = {
    composant1: InfoEtablissementComponent,
    composant2: TypeComponent,
    composant3: PhotoEtablissementComponent,
    composant4: EquipementServiceComponent,
    composant5: HebergementsComponent,
  };


  @ViewChild('select')
  select!: ElementRef<HTMLSelectElement>;

  onTabClick(): void {
    if (!this.isOptionSelected) {
      this.select.nativeElement.focus(); // Focus sur le <select>
    }
  }

}

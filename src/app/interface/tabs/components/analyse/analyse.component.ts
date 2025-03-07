import { CommonModule } from '@angular/common';
import { Component , input, OnInit, output } from '@angular/core';
import { LeftTreeComponent } from './left-tree/left-tree.component';
import { LeftTwoComponent } from './left-two/left-two.component';
import { LeftOneComponent } from './left-one/left-one.component';
import { LeftFourComponent } from './left-four/left-four.component';


@Component({
  selector: 'app-analyse',
  standalone: true,
  imports: [
    CommonModule,
],
  templateUrl: './analyse.component.html',
  styleUrl: './analyse.component.css'
})
export class AnalyseComponent implements OnInit{

  isLeftSidebarCollapsed = input<boolean>();
  changeIsLeftSidebarCollapsed = output<boolean>();
  items = [
    { 
      icon: 'fas fa-user',
      label: 'Nombre de réservations',
      component: LeftOneComponent
    },
    {
      icon: 'fas fa-user-times',
      label: 'Réservations annulées',
      component: LeftTwoComponent
    },
    {
      icon: 'fas fa-sack-dollar',
      label: 'Montant des réservations',
      component: LeftTreeComponent
    },
    {
      icon: 'fas fa-hand-holding',
      label: 'Montant des commissions',
      component: LeftFourComponent
    },
  ];

  
  activeComponent = this.items[0].component; // Composant actif par défaut
  selectedTab: number = 0; // Onglet sélectionné par défaut

  ngOnInit() {
      
  }

  setActiveComponent(component: any) {
      this.activeComponent = component;
  }

  selectTab(tabIndex: number) {
      this.selectedTab = tabIndex; // Met à jour l'onglet sélectionné
      localStorage.setItem('activeTab', tabIndex.toString()); // Stocke l'index dans localStorage

      // Mettre à jour le composant actif en fonction de l'onglet sélectionné
      this.activeComponent = this.items[tabIndex].component;

  }
}
 
import { CommonModule } from '@angular/common';
import { Component, input, output, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { LeftOneComponent } from '../left-one/left-one.component';
import { LeftTwoComponent } from '../left-two/left-two.component';
import { LeftTreeComponent } from '../left-tree/left-tree.component';
import { LeftFourComponent } from '../left-four/left-four.component';
 
@Component({
  selector: 'app-letf-sidebar',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './letf-sidebar.component.html',
  styleUrl: './letf-sidebar.component.css'
})
export class LetfSidebarComponent implements OnInit{ 


  isLeftSidebarCollapsed = input<boolean>();
  changeIsLeftSidebarCollapsed = output<boolean>();
  items = [
    { 
      routeLink: 'nombre-reservation',
      icon: 'fal fa-user',
      label: 'Nombre de réservations',
      component: LeftOneComponent 
    },
    {
      routeLink: 'claudel',
      icon: 'fal fa-user-times',
      label: 'Réservations annulées',
      component: LeftTwoComponent
    },
    {
      routeLink: 'amour',
      icon: 'fal fa-sack-dollar',
      label: 'Montant des réservations',
      component: LeftTreeComponent
    },
    {
      routeLink: 'inel',
      icon: 'fal fa-hand-holding',
      label: 'Montant des commissions',
      component: LeftFourComponent
    },
  ];

  activeComponent = this.items[0].component;

  setActiveComponent(component: any) {
    this.activeComponent = component;
  }

  constructor(public router: Router) {}

  ngOnInit() {
  }


}

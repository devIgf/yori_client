import { Component, OnInit } from '@angular/core';
import { NgApexchartsModule } from 'ng-apexcharts'; // Importez NgApexchartsModule

@Component({
  selector: 'app-left-one',
  standalone: true,
  imports: [ 
    NgApexchartsModule
  ],
  templateUrl: './left-one.component.html',
  styleUrl: './left-one.component.css'
})
export class LeftOneComponent implements OnInit {

  ngOnInit() {}
  
    // Options du graphique
    public chartOptions: any = {
      series: [
        {
          name: 'Ventes 2023',
          data: [65, 59, 80, 81, 56, 55, 40],
        },
      ],
      chart: {
        type: 'bar', // Type de graphique (bar, line, pie, etc.)
        height: 350, // Hauteur du graphique
      },
      xaxis: {
        categories: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet'],
      },
      title: {
        text: 'Ventes mensuelles 2023',
      },
    };
}

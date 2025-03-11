import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
// import * as Highcharts from 'highcharts';


// Interface pour les options du graphique
// interface ChartOptions {
//     chart: {
//         type: string;
//         zoomType: string;
//     };
//     title: {
//         text: string;
//     };
//     yAxis: {
//         title: {
//             text: string;
//         };
//     };
//     xAxis: {
//         categories: string[];
//     };
//     series: Highcharts.SeriesOptionsType[]; // Utilisation du type approprié pour les séries
//     tooltip: {
//         shared: boolean;
//         valueSuffix: string;
//     };
// }

=======
import { NgApexchartsModule } from 'ng-apexcharts'; // Importez NgApexchartsModule
>>>>>>> dcf23f2cbe4ab9743d76f889e7bc186dc66e5701

@Component({
  selector: 'app-left-one',
  standalone: true,
<<<<<<< HEAD
  imports: [
=======
  imports: [ 
    NgApexchartsModule
>>>>>>> dcf23f2cbe4ab9743d76f889e7bc186dc66e5701
  ],
  templateUrl: './left-one.component.html',
  styleUrl: './left-one.component.css'
})
export class LeftOneComponent implements OnInit {
<<<<<<< HEAD
  // public options!: ChartOptions;

  // Highcharts = Highcharts; 

  ngOnInit() {
    // this.options = {
    //   chart: {
    //     type: 'spline', // Type de graphique
    //     zoomType: 'x'   // Permet le zoom sur l'axe X
    //   },
    //   title: {
    //     text: ''
    //   },
    //   yAxis: {
    //     title: { text: '' }
    //   },
    //   xAxis: {
    //     categories: ['10PM', '12PM', '14PM', '16PM', '18PM', '20PM'] // Catégories pour l'axe X
    //   },
    //   series: [
    //     {
    //       name: 'Jour',
    //       data: [500, 700, 300, 800, 650, 900],
    //       color: '#FF4D50',
    //       type: 'spline' // Type de la série
    //     },
    //     {
    //       name: 'Semaine',
    //       data: [300, 400, 450, 450, 500, 400],
    //       color: '#77B5FE',
    //       type: 'spline' // Type de la série
    //     },
    //     {
    //       name: 'Mois',
    //       data: [6000, 7000, 8000, 7500, 9000, 8500],
    //       color: '#FFD700',
    //       type: 'spline' // Type de la série
    //     },
    //     {
    //       name: 'Année',
    //       data: [70000, 80000, 75000, 90000, 85000, 95000],
    //       color: '#32CD32',
    //       type: 'spline' // Type de la série
    //     }
    //   ],
    //   tooltip: {
    //     shared: true,
    //     valueSuffix: ' visiteurs'
    //   }
    // };
  }
  
=======

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
>>>>>>> dcf23f2cbe4ab9743d76f889e7bc186dc66e5701
}

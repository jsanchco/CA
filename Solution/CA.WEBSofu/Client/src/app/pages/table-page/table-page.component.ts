import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {CHART_COLOR_1} from '../../utils/colors';

@Component({
  selector: 'app-table-page',
  templateUrl: './table-page.component.html',
  styleUrls: ['./table-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TablePageComponent implements OnInit {
  // Data for table
  averageDynamicItems = [    {
      company: 'Pixel Garden',
      progress: 90,
      location: 'Berlin, Germany',
      changes: 0.8,
      smallPie: this.smallPieData(0.8),
      budget: 587236
    },
    {
      company: 'NORD & Co',
      progress: 80,
      location: 'Warsaw, Poland',
      changes: 0.75,
      smallPie: this.smallPieData(0.75),
      budget: 198526
    },
    {
      company: 'Ledook',
      progress: 60,
      location: 'Washington, USA',
      changes: 0.45,
      smallPie: this.smallPieData(0.45),
      budget: 265478
    },
    {
      company: 'Luxware',
      progress: 50,
      location: 'Paris, France',
      changes: 0.45,
      smallPie: this.smallPieData(0.55),
      budget: 351268
    },
    {
      company: 'Fin Trend',
      progress: 40,
      location: 'Oslo, Norway',
      changes: 0.38,
      smallPie: this.smallPieData(0.38),
      budget: 845236
    }
  ];
  constructor() { }

  ngOnInit() {
  }

  /**
   *
   * @param val
   * @returns model for small pie chart
   */
  smallPieData(val) {
    return {
      series: [
        {
          type: 'pie',
          clockWise: true,
          hoverAnimation: false,
          cursor: 'default',
          radius: [0, '100%'],
          label: {
            normal: {
              show: false,
            }
          },
          data: [{
            value: val,
            itemStyle: {
              normal: {
                color: CHART_COLOR_1
              },
              emphasis: {
                color: CHART_COLOR_1
              }
            }
          }, {
            value: 1 - val,
            itemStyle: {
              normal: {
                color: 'rgba(0, 0, 0, 0.11)'
              },
              emphasis: {
                color: 'rgba(0, 0, 0, 0.11)'
              }
            }
          }]
        }
      ]
    }
  }
}

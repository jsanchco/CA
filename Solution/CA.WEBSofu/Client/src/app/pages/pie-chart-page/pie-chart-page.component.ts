import {Component, ElementRef, OnDestroy, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {
  CHART_COLOR_1, CHART_COLOR_2, CHART_COLOR_3, CHART_COLOR_4, CHART_COLOR_5,
  CHART_TEXT_COLOR
} from '../../utils/colors';
import {ResizeService} from '../../resize/resize.service';
import {Subject} from 'rxjs';
import * as echarts from 'echarts';
import {getPolarChartData} from '../dashboard-page/dashboard-charts-data';
import {takeUntil} from "rxjs/operators";

@Component({
  selector: 'app-pie-chart-page',
  templateUrl: './pie-chart-page.component.html',
  styleUrls: ['./pie-chart-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PieChartPageComponent implements OnInit, OnDestroy {

  // Informer to stop using observables after component is destroyed
  private ngUnsubscribe: Subject<void> = new Subject<void>();

  // Chart elements references and echarts instances
  @ViewChild('customPieChart')
  customPieChartElementRef: ElementRef;
  customPieChart;

  @ViewChild('polarChart')
  polarChartElementRef: ElementRef;
  polarChart;

  @ViewChild('nestedPieChart')
  nestedPieChartElementRef: ElementRef;
  nestedPieChart;

  @ViewChild('doughnutPieChart')
  doughnutPieChartElementRef: ElementRef;
  doughnutPieChart;

  // Model for customized pie chart
  customdPieChartOption = {
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    visualMap: {
      show: false,
      min: 80,
      max: 600,
      inRange: {
        colorLightness: [0, 1]
      }
    },
    series: [
      {
        name: 'Series 1',
        type: 'pie',
        radius: '55%',
        center: ['50%', '50%'],
        data: [
          {value: 335, name: 'First'},
          {value: 310, name: 'Second'},
          {value: 274, name: 'Third'},
          {value: 235, name: 'Fourth'},
          {value: 400, name: 'Fifth'}
        ].sort(function (a, b) {
          return a.value - b.value;
        }),
        roseType: 'angle',
        label: {
          normal: {
            textStyle: {
              color: CHART_TEXT_COLOR
            }
          }
        },
        labelLine: {
          normal: {
            lineStyle: {
              color: CHART_TEXT_COLOR
            },
            smooth: 0,
            length: 15,
            length2: 25
          }
        },
        itemStyle: {
          normal: {
            color: CHART_COLOR_1,
            shadowBlur: 100,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        },

        animationType: 'scale',
        animationEasing: 'elasticOut',
        animationDelay: 200
      }
    ]
  };
  // Model for polar chart
  polarChartItems = [
    {
      value: 0.5,
      color: '#40515d',
      name: 'USA',
      delta: 0.07
    },
    {
      value: 0.6,
      color: CHART_COLOR_4,
      name: 'China',
      delta: 0.03
    },
    {
      value: 0.7,
      color: CHART_COLOR_5,
      name: 'UK',
      delta: -0.05
    },
    {
      value: 0.8,
      color: CHART_COLOR_1,
      name: 'France',
      delta: 0.02
    }];
  // Model for nested pie chart
  nestedPieChartOption = {
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    legend: {
      orient: 'vertical',
      x: 'left',
      data: ['Data 1', 'Data 2', 'Data 3', 'Data 4', 'Data 5', 'Data 6', 'Data 7'],
      textStyle: {
        color: CHART_TEXT_COLOR
      }
    },
    series: [
      {
        name: 'Some contactData',
        type: 'pie',
        selectedMode: 'single',
        radius: [0, '30%'],

        label: {
          normal: {
            position: 'inner'
          }
        },
        labelLine: {
          normal: {
            show: false
          }
        },
        data: [
          {value: 335, name: 'Data 1', selected: true, color: CHART_COLOR_1},
          {value: 679, name: 'Data 2', color: CHART_COLOR_4},
          {value: 1548, name: 'Data 3', color: CHART_COLOR_3}
        ],
        itemStyle: {
          normal: {
            color: (val) => val.data.color,
            shadowBlur: 10,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        },
      },
      {
        name: 'Some contactData',
        type: 'pie',
        radius: ['40%', '55%'],

        data: [
          {value: 335, name: 'Data 1', color: CHART_COLOR_1},
          {value: 310, name: 'Data 4', color: CHART_COLOR_2},
          {value: 234, name: 'Data 5', color: CHART_COLOR_5}
        ],
        itemStyle: {
          normal: {
            color: (val) => val.data.color,
            shadowBlur: 10,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        },
      }
    ]
  };
  // Model for doughnut chart
  doughnutPieChartOption = {
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    legend: {
      orient: 'vertical',
      x: 'left',
      data: ['First', 'Second', 'Third', 'Fourth', 'Fifth'],
      textStyle: {
        color: CHART_TEXT_COLOR
      }
    },
    series: [
      {
        name: 'Some contactData',
        type: 'pie',
        radius: ['50%', '70%'],
        avoidLabelOverlap: false,
        label: {
          normal: {
            show: false,
            position: 'center'
          },
          emphasis: {
            show: true,
            textStyle: {
              fontSize: '30',
              fontWeight: 'bold'
            }
          }
        },
        labelLine: {
          normal: {
            show: false
          }
        },
        data: [
          {value: 335, name: 'First', color: CHART_COLOR_4},
          {value: 310, name: 'Second', color: CHART_COLOR_1},
          {value: 234, name: 'Third', color: CHART_COLOR_3},
          {value: 135, name: 'Fourth', color: CHART_COLOR_2},
          {value: 1548, name: 'Fifth', color: CHART_COLOR_5}
        ],
        itemStyle: {
          normal: {
            color: (val) => val.data.color,
            shadowBlur: 10,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        },
      }
    ]
  };

  constructor(private resizeService: ResizeService) {
  }

  ngOnInit() {
    this.customPieChart = echarts.init(this.customPieChartElementRef.nativeElement);
    this.customPieChart.setOption(this.customdPieChartOption);

    this.polarChart = echarts.init(this.polarChartElementRef.nativeElement);
    this.polarChart.setOption(getPolarChartData(this.polarChartItems));

    this.nestedPieChart = echarts.init(this.nestedPieChartElementRef.nativeElement);
    this.nestedPieChart.setOption(this.nestedPieChartOption);

    this.doughnutPieChart = echarts.init(this.doughnutPieChartElementRef.nativeElement);
    this.doughnutPieChart.setOption(this.doughnutPieChartOption);

    this.resizeService.resizeInformer$.pipe(takeUntil(this.ngUnsubscribe)).subscribe(() => {
      this.customPieChart.resize();
      this.polarChart.resize();
      this.nestedPieChart.resize();
      this.doughnutPieChart.resize();
    })
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  /**
   * Mock method to generate polar chart data
   * @param items
   * @returns {{series: any}}
   */
  getPolarChartData(items) {
    const series = items.map((item, i) => {
      return {
        name: i,
        type: 'pie',
        clockWise: true,
        hoverAnimation: false,
        cursor: 'default',
        startAngle: 270,
        radius: [70 + i * 6 + '%', 70 + i * 6 + 2.5 + '%'],
        label: {
          normal: {
            show: false,
          }
        },
        data: [{
          value: item.value,
          name: item.value,
          itemStyle: {
            normal: {
              color: item.color
            },
            emphasis: {
              color: item.color,
            }
          }
        }, {
          value: 1 - item.value,
          itemStyle: {
            normal: {
              color: 'transparent'
            }
          }
        }]
      }

    });
    return {
      series: series
    }
  }

}

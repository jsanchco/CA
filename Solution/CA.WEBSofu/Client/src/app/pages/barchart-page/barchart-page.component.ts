import {Component, ElementRef, OnDestroy, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {Subject} from 'rxjs';
import {ResizeService} from '../../resize/resize.service';
import * as echarts from 'echarts';
import {takeUntil} from 'rxjs/operators'
import {CHART_COLOR_1, CHART_COLOR_2, CHART_COLOR_3, CHART_COLOR_5, CHART_TEXT_COLOR} from '../../utils/colors';

@Component({
  selector: 'app-barchart-page',
  templateUrl: './barchart-page.component.html',
  styleUrls: ['./barchart-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BarchartPageComponent implements OnInit, OnDestroy {

  // Chart elements references and echarts instances
  @ViewChild('animatedBarChart')
  animatedBarChartElementRef: ElementRef;
  animatedBarChart;

  @ViewChild('simpleBarChart')
  simpleBarChartElementRef: ElementRef;
  simpleBarChart;

  @ViewChild('horizontalBarChart')
  horizontalBarChartElementRef: ElementRef;
  horizontalBarChart;

  @ViewChild('groupBarChart')
  groupBarChartElementRef: ElementRef;
  groupBarChart;

  @ViewChild('trendBarChart')
  trendBarChartElementRef: ElementRef;
  trendBarChart;

  // Informer to stop using observables after component is destroyed
  private ngUnsubscribe: Subject<void> = new Subject<void>();

  // Chart models
  animatedBarOption = {
    legend: {
      data: ['Bar', 'Bar2'],
      align: 'left',
      bottom: 0,
      textStyle: {
        color: CHART_TEXT_COLOR
      }
    },
    toolbox: {
      feature: {
        magicType: {
          type: ['stack', 'tiled'],
          title: {
            stack: 'Stack',
            tiled: 'Tiled',
            textStyle: {
              color: CHART_TEXT_COLOR
            }
          }
        }
      }
    },
    tooltip: {},
    xAxis: {
      data: this.getAnimatedBarXAxisData(),
      silent: false,
      splitLine: {
        show: false
      },
      axisLabel: {
        textStyle: {
          color: CHART_TEXT_COLOR
        }
      },
      axisTicks: {
        lineStyle: {
          color: CHART_TEXT_COLOR
        }
      },
      axisLine: {
        lineStyle: {
          color: CHART_TEXT_COLOR
        }
      }
    },
    yAxis: {
      axisLabel: {
        textStyle: {
          color: CHART_TEXT_COLOR
        }
      },
      axisTicks: {
        lineStyle: {
          color: CHART_TEXT_COLOR
        }
      },
      axisLine: {
        lineStyle: {
          color: CHART_TEXT_COLOR
        }
      }
    },
    series: [{
      name: 'Bar',
      type: 'bar',
      stack: 'firstStack',
      data: this.getAnimatedBarData(),
      animationDelay: function (idx) {
        return idx * 10;
      },
      itemStyle: {
        normal: {
          color: CHART_COLOR_2
        }
      },
      axisLabel: {
        textStyle: {
          color: CHART_TEXT_COLOR
        }
      },
      axisTicks: {
        lineStyle: {
          color: CHART_TEXT_COLOR
        }
      },
      axisLine: {
        lineStyle: {
          color: CHART_TEXT_COLOR
        }
      }
    }, {
      name: 'Bar2',
      type: 'bar',
      stack: 'firstStack',
      data: this.getAnimatedBarData(),
      animationDelay: function (idx) {
        return idx * 10 + 100;
      },
      itemStyle: {
        normal: {
          color: CHART_COLOR_1
        }
      }
    }],
    animationEasing: 'elasticOut',
    animationDelayUpdate: function (idx) {
      return idx * 5;
    }
  };
  simpleBarChartOption = {
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: ['Bar 1', 'Bar 2'],
      bottom: 0,
      textStyle: {
        color: CHART_TEXT_COLOR
      }
    },
    toolbox: {
      show: true,
      feature: {
        magicType: {
          show: true,
          type: ['line', 'bar'],
          title: {
            line: 'Line',
            bar: 'Bar',
            textStyle: {
              color: CHART_TEXT_COLOR
            }
          }
        }
      }
    },
    calculable: true,
    xAxis: [
      {
        type: 'category',
        data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
        axisLabel: {
          textStyle: {
            color: CHART_TEXT_COLOR
          }
        },
        axisTicks: {
          lineStyle: {
            color: CHART_TEXT_COLOR
          }
        },
        axisLine: {
          lineStyle: {
            color: CHART_TEXT_COLOR
          }
        }
      },
    ],
    yAxis: [
      {
        type: 'value',
        axisLabel: {
          textStyle: {
            color: CHART_TEXT_COLOR
          }
        },
        axisTicks: {
          lineStyle: {
            color: CHART_TEXT_COLOR
          }
        },
        axisLine: {
          lineStyle: {
            color: CHART_TEXT_COLOR
          }
        }
      }
    ],
    series: [
      {
        name: 'Bar 1',
        type: 'bar',
        data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
        markPoint: {
          data: [
            {type: 'max', name: 'Max'},
            {type: 'min', name: 'Min'}
          ]
        },
        markLine: {
          data: [
            {type: 'average', name: 'Average'}
          ]
        },
        itemStyle: {
          normal: {
            color: CHART_COLOR_1
          }
        }
      },
      {
        name: 'Bar 2',
        type: 'bar',
        data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
        markPoint: {
          data: [
            {name: 'Mark 1', value: 182.2, xAxis: 7, yAxis: 183},
            {name: 'Mark 2', value: 2.3, xAxis: 11, yAxis: 3}
          ]
        },
        markLine: {
          data: [
            {type: 'average', name: 'Average'}
          ]
        },
        itemStyle: {
          normal: {
            color: CHART_COLOR_2
          }
        }
      }
    ]
  };
  horizontalBarChartOption = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    legend: {
      data: ['Bar 1', 'Bar 2', 'Bar 3'],
      bottom: 0,
      textStyle: {
        color: CHART_TEXT_COLOR
      }
    },
    grid: {
      bottom: '10%',
      top: 20,
      containLabel: true
    },
    xAxis: [
      {
        type: 'value',
        axisLabel: {
          textStyle: {
            color: CHART_TEXT_COLOR
          }
        },
        axisTicks: {
          lineStyle: {
            color: CHART_TEXT_COLOR
          }
        },
        axisLine: {
          lineStyle: {
            color: CHART_TEXT_COLOR
          }
        }
      }
    ],
    yAxis: [
      {
        type: 'category',
        axisTick: {show: false},
        data: ['1', '2', '3', '4'],
        axisLabel: {
          textStyle: {
            color: CHART_TEXT_COLOR
          }
        },
        axisTicks: {
          lineStyle: {
            color: CHART_TEXT_COLOR
          }
        },
        axisLine: {
          lineStyle: {
            color: CHART_TEXT_COLOR
          }
        }
      }
    ],
    series: [
      {
        name: 'Bar 1',
        type: 'bar',
        label: {
          normal: {
            show: true,
            position: 'inside'
          }
        },
        itemStyle: {
          normal: {
            color: CHART_COLOR_1
          }
        },
        data: [200, 170, 240, 244]
      },
      {
        name: 'Bar 3',
        type: 'bar',
        stack: 'Stack',
        label: {
          normal: {
            show: true
          }
        },
        itemStyle: {
          normal: {
            color: CHART_COLOR_2
          }
        },
        data: [320, 302, 341, 374]
      },
      {
        name: 'Bar 2',
        type: 'bar',
        stack: 'Stack',
        label: {
          normal: {
            show: true,
            position: 'left'
          }
        },
        itemStyle: {
          normal: {
            color: CHART_COLOR_3
          }
        },
        data: [-120, -132, -101, -134]
      }
    ]
  };
  groupBarItems = {
    labels: [26, 27, 28, 29, 30, 31],
    items: [
      {
        name: 'Sales',
        color: CHART_COLOR_1,
        values: [110, 105, 140, 60, 180, 110]
      },
      {
        name: 'New customers',
        color: CHART_COLOR_2,
        values: [150, 190, 165, 110, 150, 150]
      },
      {
        name: 'Reviews',
        color: CHART_COLOR_3,
        values: [180, 145, 125, 210, 90, 180]
      },
      {
        name: 'Phone calls',
        color: CHART_COLOR_5,
        values: [140, 155, 80, 175, 125, 110]
      }
    ]
  };
  trendBarChartData = {
    barWidth: 3,
    grid: {
      top: 5,
      bottom: 5,
    },
    xAxis: [
      {
        show: false,
        type: 'category',
        data: new Array(48).fill(''),
      }
    ],
    yAxis: [
      {
        splitNumber: 3,
        type: 'value',
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          show: false
        },
        splitLine: {
          lineStyle: {
            color: 'rgba(0, 0, 0, 0.11)'
          }
        }
      }
    ],
    series: {
      type: 'bar',
      cursor: 'default',
      itemStyle: {
        normal: {
          color: CHART_COLOR_1,
          barBorderRadius: 2
        },
        emphasis: {
          color: CHART_COLOR_1,
        }
      },
      data: [25, 45, 50, 75, 40, 20, 30, -40, -30, 40, 90, 10, 5, -10, -20, -30, -40, -50, 25, -55, -25, -60, -40, 20,
        -20, -10,
        -25, 20, 30, 45, 50, 90, 20, 10, -10, -20, -30, -40, -50, 25, -55, -25, -60, -40, 40, -20, -10, -25, 20],
    }
  };

  constructor(private resizeService: ResizeService) {
  }

  ngOnInit() {
    this.animatedBarChart = echarts.init(this.animatedBarChartElementRef.nativeElement);
    this.animatedBarChart.setOption(this.animatedBarOption);

    this.simpleBarChart = echarts.init(this.simpleBarChartElementRef.nativeElement);
    this.simpleBarChart.setOption(this.simpleBarChartOption);

    this.horizontalBarChart = echarts.init(this.horizontalBarChartElementRef.nativeElement);
    this.horizontalBarChart.setOption(this.horizontalBarChartOption);

    this.groupBarChart = echarts.init(this.groupBarChartElementRef.nativeElement);
    this.groupBarChart.setOption(this.getGroupBarData(this.groupBarItems));

    this.trendBarChart = echarts.init(this.trendBarChartElementRef.nativeElement);
    this.trendBarChart.setOption(this.trendBarChartData);

    this.resizeService.resizeInformer$.pipe(takeUntil(this.ngUnsubscribe)).subscribe(() => {
      this.animatedBarChart.resize();
      this.simpleBarChart.resize();
      this.horizontalBarChart.resize();
      this.groupBarChart.resize();
      this.trendBarChart.resize();
    });
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  /**
   * Mock method for data generation
   * @returns {Array} data for charts
   */
  getAnimatedBarData() {
    const data = [];
    for (let i = 0; i < 100; i++) {
      data.push((Math.sin(i / 5) * (i / 5 - 10) + i / 6) * 5);
    }
    return data;
  }

  /**
   * Mock method for data generation
   * @returns {Array} data for charts
   */
  getAnimatedBarXAxisData() {
    const data = [];
    for (let i = 0; i < 100; i++) {
      data.push('Label ' + i);
    }
    return data;
  }

  /**
   * Mock method for data generation
   * @param groupBarItems
   */
  getGroupBarData(groupBarItems) {
    const series = this.groupBarItems.items.map(item => {
      return {
        name: item.name,
        type: 'bar',
        cursor: 'default',
        data: item.values,
        itemStyle: {
          normal: {
            color: item.color,
            barBorderRadius: 2
          },
          emphasis: {
            color: item.color,
          }
        }
      }
    });
    return {
      legend: {
        type: 'scroll',
        left: 40,
        itemGap: 5,
        itemWidth: 8,
        itemHeight: 8,
        icon: 'circle',
        data: this.groupBarItems.items.map(item => item.name),
        textStyle: {
          fontFamily: 'OpenSans',
          fontSize: 14,
          color: 'rgba(0, 0, 0, 0.59)',
          padding: [0, 30, 0, 0]
        },
      },
      barWidth: 3,
      barGap: '100%',
      grid: {
        top: 50,
        bottom: 20,
        containLabel: true
      },
      xAxis: [
        {
          type: 'category',
          offset: 5,
          data: this.groupBarItems.labels,
          axisTick: {
            show: false
          },
          axisLine: {
            show: false
          },
          axisLabel: {
            fontFamily: 'OpenSans',
            fontSize: 14,
            color: 'rgba(0, 0, 0, 0.59)'
          },
        }
      ],
      yAxis: [
        {
          type: 'value',
          offset: 30,
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            fontFamily: 'OpenSans',
            fontSize: 14,
            color: 'rgba(0, 0, 0, 0.59)',
            align: 'left'
          },
          splitLine: {
            lineStyle: {
              color: 'rgba(0, 0, 0, 0.11)'
            }
          }
        }
      ],
      series: series
    };
  }

}

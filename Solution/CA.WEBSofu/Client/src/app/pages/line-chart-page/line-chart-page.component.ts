import {Component, ElementRef, OnDestroy, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {Subject} from 'rxjs';
import {ResizeService} from '../../resize/resize.service';
import * as echarts from 'echarts';
import {CHART_COLOR_1, CHART_COLOR_2, CHART_COLOR_4, CHART_COLOR_5, CHART_TEXT_COLOR} from '../../utils/colors';
import {takeUntil} from "rxjs/operators";

@Component({
  selector: 'app-line-chart-page',
  templateUrl: './line-chart-page.component.html',
  styleUrls: ['./line-chart-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LineChartPageComponent implements OnInit, OnDestroy {
  // Chart elements references and echarts instances
  @ViewChild('simpleLineChart')
  simpleLineChartElementRef: ElementRef;
  simpleLineChart;

  @ViewChild('multiAxisLineChart')
  multiAxisLineChartElementRef: ElementRef;
  multiAxisLineChart;

  @ViewChild('areaChart')
  areaChartElementRef: ElementRef;
  areaChart;

  @ViewChild('stackedAreaChart')
  stackedAreaChartElementRef: ElementRef;
  stackedAreaChart;

  @ViewChild('pointsLineChart')
  pointsLineChartElementRef: ElementRef;
  pointsLineChart;

  @ViewChild('trendLineChart')
  trendLineChartElementRef: ElementRef;
  trendLineChart;

  @ViewChild('gradientAreaChart')
  gradientAreaChartElementRef: ElementRef;
  gradientAreaChart;

  // Informer to stop using observables after component is destroyed
  private ngUnsubscribe: Subject<void> = new Subject<void>();

  // Model for simple line chart
  simpleLineChartOption = {
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: ['Day', 'Night'],
      bottom: 0,
      textStyle: {
        color: CHART_TEXT_COLOR
      }
    },
    grid: {
      bottom: 80
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
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
      type: 'value',
      axisLabel: {
        formatter: '{value} °C',
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
    series: [
      {
        name: 'Day',
        type: 'line',
        data: [11, 11, 15, 13, 12, 13, 10],
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
        },
        lineStyle: {
          normal: {
            color: CHART_COLOR_1
          }
        }
      },
      {
        name: 'Night',
        type: 'line',
        data: [1, -2, 2, 5, 3, 2, 0],
        markPoint: {
          data: [
            {name: '', value: -2, xAxis: 1, yAxis: -1.5}
          ]
        },
        markLine: {
          data: [
            {type: 'average', name: ''},
            [{
              symbol: 'none',
              x: '90%',
              yAxis: 'max'
            }, {
              symbol: 'circle',
              label: {
                normal: {
                  position: 'start',
                  formatter: ''
                }
              },
              type: 'max',
              name: ''
            }]
          ]
        },
        lineStyle: {
          normal: {
            color: CHART_COLOR_2
          }
        },
        itemStyle: {
          normal: {
            color: CHART_COLOR_2
          }
        }
      }
    ]
  };
  // Model fir multiple axes chart
  multiAxisLineChartOption = {
    color: [CHART_COLOR_1, CHART_COLOR_2],
    tooltip: {
      trigger: 'none',
      axisPointer: {
        type: 'cross'
      }
    },
    legend: {
      data: ['2015 year', '2016 year'],
      bottom: 0,
      textStyle: {
        color: CHART_TEXT_COLOR
      }
    },
    grid: {
      top: 70,
      bottom: 80
    },
    xAxis: [
      {
        type: 'category',
        axisTick: {
          alignWithLabel: true
        },
        axisLine: {
          onZero: false,
          lineStyle: {
            color: CHART_COLOR_2
          }
        },
        axisPointer: {
          label: {
            formatter: function (params) {
              return 'year  ' + params.value + '：' + params.seriesData[0].data;
            }
          }
        },
        data: ['2016-1', '2016-2', '2016-3', '2016-4', '2016-5', '2016-6', '2016-7', '2016-8', '2016-9', '2016-10',
          '2016-11', '2016-12'],
        axisLabel: {
          textStyle: {
            color: CHART_TEXT_COLOR
          }
        },
        axisTicks: {
          lineStyle: {
            color: CHART_TEXT_COLOR
          }
        }
      },
      {
        type: 'category',
        axisTick: {
          alignWithLabel: true
        },
        axisLine: {
          onZero: false,
          lineStyle: {
            color: CHART_COLOR_1
          }
        },
        axisPointer: {
          label: {
            formatter: function (params) {
              return 'year  ' + params.value + '：' + params.seriesData[0].data;
            }
          }
        },
        data: ['2015-1', '2015-2', '2015-3', '2015-4', '2015-5', '2015-6', '2015-7', '2015-8', '2015-9', '2015-10',
          '2015-11', '2015-12']
      }
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
        name: '2015 year',
        type: 'line',
        xAxisIndex: 1,
        smooth: true,
        data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
      },
      {
        name: '2016 year',
        type: 'line',
        smooth: true,
        data: [3.9, 5.9, 11.1, 18.7, 48.3, 69.2, 231.6, 46.6, 55.4, 18.4, 10.3, 0.7]
      }
    ]
  };
  // Aria chart model
  areaChartOption = {
    tooltip: {
      trigger: 'axis',
      position: function (pt) {
        return [pt[0], '10%'];
      }
    },
    toolbox: {
      feature: {
        restore: {
          title: 'Restore',
          textStyle: {
            color: CHART_TEXT_COLOR
          }
        }
      }
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: this.generateAreaDate(),
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
      type: 'value',
      boundaryGap: [0, '100%'],
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
    dataZoom: [{
      type: 'inside',
      start: 0,
      end: 10
    }, {
      start: 0,
      end: 10,
      handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,' +
      '8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
      handleSize: '80%',
      handleStyle: {
        color: '#fff',
        shadowBlur: 3,
        shadowColor: 'rgba(0, 0, 0, 0.6)',
        shadowOffsetX: 2,
        shadowOffsetY: 2
      }
    }],
    series: [
      {
        name: 'Series 1',
        type: 'line',
        smooth: true,
        symbol: 'none',
        sampling: 'average',
        itemStyle: {
          normal: {
            color: CHART_COLOR_1
          }
        },
        areaStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 0,
              color: CHART_COLOR_1
            }, {
              offset: 1,
              color: CHART_COLOR_4
            }])
          }
        },
        lineStyle: {
          normal: {
            color: CHART_COLOR_2
          }
        },
        data: this.generateAreaData()
      }
    ]
  };
  // Stacked aria chart model
  stackedAreaChartOption = {
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: ['Series 1', 'Series 2', 'Series 3', 'Series 4'],
      bottom: 0,
      textStyle: {
        color: CHART_TEXT_COLOR
      }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '80',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: false,
        data: ['First', 'Second', 'Third', 'Fourth', 'Fifth', 'Sixth', 'Seventh'],
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
        name: 'Series 4',
        type: 'line',
        stack: 'stack1',
        itemStyle: {
          normal: {
            color: CHART_COLOR_5
          }
        },
        lineStyle: {
          normal: {
            color: CHART_COLOR_5
          }
        },
        areaStyle: {
          normal: {
            color: CHART_COLOR_5
          }
        },
        data: [220, 182, 191, 234, 290, 330, 310]
      },
      {
        name: 'Series 3',
        type: 'line',
        stack: 'stack1',
        itemStyle: {
          normal: {
            color: CHART_COLOR_4
          }
        },
        lineStyle: {
          normal: {
            color: CHART_COLOR_4
          }
        },
        areaStyle: {
          normal: {
            color: CHART_COLOR_4
          }
        },
        data: [150, 232, 201, 154, 190, 330, 410]
      },
      {
        name: 'Series 2',
        type: 'line',
        stack: 'stack1',
        itemStyle: {
          normal: {
            color: CHART_COLOR_2
          }
        },
        lineStyle: {
          normal: {
            color: CHART_COLOR_2
          }
        },
        areaStyle: {
          normal: {
            color: CHART_COLOR_2
          }
        },
        data: [320, 332, 301, 334, 390, 330, 320]
      },
      {
        name: 'Series 1',
        type: 'line',
        stack: 'stack1',
        label: {
          normal: {
            show: true,
            position: 'top'
          }
        },
        itemStyle: {
          normal: {
            color: CHART_COLOR_1
          }
        },
        lineStyle: {
          normal: {
            color: CHART_COLOR_1
          }
        },
        areaStyle: {
          normal: {
            color: CHART_COLOR_1
          }
        },
        data: [820, 932, 901, 934, 1290, 1330, 1320]
      }
    ]
  };
  // Model for line chart with points
  pointsLineChartOption = {
    grid: {
      left: 50,
      bottom: 30
    },
    legend: {
      left: -5,
      itemGap: 40,
      itemWidth: 8,
      itemHeight: 8,
      icon: 'circle',
      data: ['2017 year', '2018 year'],
      textStyle: {
        fontFamily: 'OpenSans',
        fontSize: 14,
        color: 'rgba(0, 0, 0, 0.59)'
      },
    },
    xAxis: {
      type: 'category',
      offset: 5,
      data: ['26', '27', '28', '29', '30', '31'],
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
    },
    yAxis: {
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
    },
    series: [
      {
        name: '2018 year',
        type: 'line',
        lineStyle: {
          normal: {
            width: 3,
            color: CHART_COLOR_4,
            shadowColor: 'rgba(0, 0, 0, 0.36)',
            shadowOffsetY: 9,
            shadowBlur: 13
          }
        },
        itemStyle: {
          normal: {
            color: CHART_COLOR_4,
            borderWidth: 3,
            borderColor: CHART_COLOR_4
          }
        },
        symbolSize: 12,
        data: [130, 175, 150, 225, 125, 165]
      },
      {
        name: '2017 year',
        type: 'line',
        lineStyle: {
          normal: {
            width: 3,
            color: CHART_COLOR_1,
            shadowColor: 'rgba(0, 0, 0, 0.36)',
            shadowOffsetY: 9,
            shadowBlur: 13
          }
        },
        itemStyle: {
          normal: {
            color: CHART_COLOR_1,
            borderWidth: 3,
            borderColor: CHART_COLOR_1
          }
        },
        symbolSize: 12,
        data: [150, 100, 175, 140, 170, 90]
      }
    ]
  };
  // Trend line chart data
  trendLineChartOption = {
    grid: {
      top: 20,
      bottom: 20,
      left: 30,
      right: 30
    },
    xAxis: {
      data: ['Thu', '', 'Fri', '', 'Sat', '', 'Sun', '', 'Mon'],
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
      splitLine: {
        show: true,
        lineStyle: {
          color: 'rgba(0, 0, 0, 0.11)',
          type: 'dashed',
          width: 1
        }
      }
    },
    tooltip: {
      show: true,
      textStyle: {
        fontFamily: 'OpenSans',
        fontSize: 12,
      },
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
      formatter: '$ {c0}',
      extraCssText: 'border-radius: 2px'
    },
    yAxis: {
      show: false,
      min: 11500,
      max: 9500
    },
    series: [{
      type: 'line',
      symbolSize: 25,
      data: [10257, 10824, 9924, 10900, 10500, 11500, 11000, 11200, 11000],
      lineStyle: {
        normal: {
          color: CHART_COLOR_1,
          width: 3,
          shadowColor: 'rgba(0, 0, 0, 0.24)',
          shadowBlur: 10,
          shadowOffsetY: 13
        }
      },
      itemStyle: {
        normal: {
          opacity: 0
        }
      }
    }]
  };
  // Gradient area chart data
  gradientAreaChartOption = {
    legend: {
      left: 15,
      itemGap: 40,
      itemWidth: 8,
      itemHeight: 8,
      icon: 'circle',
      data: ['2017 year', '2018 year'],
      textStyle: {
        fontFamily: 'OpenSans',
        fontSize: 14,
        color: 'rgba(0, 0, 0, 0.59)'
      },
    },
    grid: {
      left: -10,
      right: -10,
      top: 20,
      bottom: 0
    },
    xAxis: [
      {
        type: 'category',
        data: new Array(26),
        show: false
      }
    ],
    yAxis: [
      {
        type: 'value',
        show: false,
        min: 0
      }
    ],
    series: [
      {
        type: 'line',
        name: '2018 year',
        showSymbol: false,
        smooth: true,
        lineStyle: {
          normal: {
            opacity: 0
          }
        },
        itemStyle: {
          normal: {
            color: CHART_COLOR_4
          }
        },
        areaStyle: {
          normal: {
            opacity: 1,
            shadowBlur: 14,
            shadowColor: 'rgba(0, 0, 0, 0.3)',
            shadowOffsetY: 0,
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                {
                  offset: 0, color: CHART_COLOR_4 // color at 0% position
                },
                {
                  offset: 1, color: '#ffffff' // color at 100% position
                }
              ]
            }
          }
        },
        data: [50, 55, 60, 55, 70, 45, 30, 50, 55, 65, 80, 65, 55, 65, 90, 40, 30, 30, 45, 65, 55, 50, 50, 55, 45, 65]

      },
      {
        type: 'line',
        name: '2017 year',
        showSymbol: false,
        smooth: true,
        lineStyle: {
          normal: {
            opacity: 0
          }
        },
        itemStyle: {
          normal: {
            color: CHART_COLOR_1
          }
        },
        areaStyle: {
          normal: {
            opacity: 1,
            shadowBlur: 14,
            shadowColor: 'rgba(0, 0, 0, 0.3)',
            shadowOffsetY: 0,
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                {
                  offset: 0, color: CHART_COLOR_1 // color at 0% position
                },
                {
                  offset: 1, color: '#ffffff' // color at 100% position
                }
              ],
              globalCoord: false // false by default
            }
          }
        },
        data: [55, 65, 45, 60, 80, 75, 80, 85, 75, 60, 62, 63, 65, 70, 90, 55, 57, 40, 55, 27, 39, 76, 40, 35, 94, 18,]
      }
    ]
  };

  constructor(private resizeService: ResizeService) {
  }

  ngOnInit() {
    this.simpleLineChart = echarts.init(this.simpleLineChartElementRef.nativeElement);
    this.simpleLineChart.setOption(this.simpleLineChartOption);

    this.multiAxisLineChart = echarts.init(this.multiAxisLineChartElementRef.nativeElement);
    this.multiAxisLineChart.setOption(this.multiAxisLineChartOption);

    this.areaChart = echarts.init(this.areaChartElementRef.nativeElement);
    this.areaChart.setOption(this.areaChartOption);

    this.stackedAreaChart = echarts.init(this.stackedAreaChartElementRef.nativeElement);
    this.stackedAreaChart.setOption(this.stackedAreaChartOption);

    this.pointsLineChart = echarts.init(this.pointsLineChartElementRef.nativeElement);
    this.pointsLineChart.setOption(this.pointsLineChartOption);

    this.trendLineChart = echarts.init(this.trendLineChartElementRef.nativeElement);
    this.trendLineChart.setOption(this.trendLineChartOption);

    this.gradientAreaChart = echarts.init(this.gradientAreaChartElementRef.nativeElement);
    this.gradientAreaChart.setOption(this.gradientAreaChartOption);

    this.resizeService.resizeInformer$.pipe(takeUntil(this.ngUnsubscribe)).subscribe(() => {
      this.simpleLineChart.resize();
      this.multiAxisLineChart.resize();
      this.areaChart.resize();
      this.stackedAreaChart.resize();
      this.pointsLineChart.resize();
      this.trendLineChart.resize();
      this.gradientAreaChart.resize();
    })
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  /**
   * Mock method for chart data generation
   * @returns {number[]}
   */
  generateAreaData() {
    const data = [Math.random() * 300];
    for (let i = 1; i < 20000; i++) {
      data.push(Math.round((Math.random() - 0.5) * 20 + data[i - 1]));
    }
    return data;
  }

  /**
   * Mock method for chart data generation
   * @returns {Array}
   */
  generateAreaDate() {
    let base = +new Date(1968, 9, 3);
    const oneDay = 24 * 3600 * 1000;
    const date = [];
    for (let i = 1; i < 20000; i++) {
      const now = new Date(base += oneDay);
      date.push([now.getDate(), now.getMonth() + 1, now.getFullYear()].join('/'));
    }
    return date;
  }

}

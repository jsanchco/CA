import {Component, ElementRef, OnDestroy, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {ResizeService} from '../../resize/resize.service';
import {Subject} from 'rxjs';
import * as echarts from 'echarts';
import {CHART_COLOR_1, CHART_COLOR_2, CHART_TEXT_COLOR} from '../../utils/colors';
import {takeUntil} from "rxjs/operators";

@Component({
  selector: 'app-translate-page',
  templateUrl: './translate-page.component.html',
  styleUrls: ['./translate-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TranslatePageComponent implements OnInit, OnDestroy {

  // Informer to stop using observables after component is destroyed
  private ngUnsubscribe: Subject<void> = new Subject<void>();

  // Chart elements references and echarts instances
  @ViewChild('lineChart')
  lineChartElementRef: ElementRef;
  lineChart;


  constructor(private translateService: TranslateService, private resizeService: ResizeService) {
  }

  ngOnInit() {
    this.lineChart = echarts.init(this.lineChartElementRef.nativeElement);
    this.resizeService.resizeInformer$.pipe(takeUntil(this.ngUnsubscribe)).subscribe(() => {
      this.lineChart.resize();
    })
    this.loadLineChartModel();
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  /**
   * Changes language
   * @param event
   */
  changeLanguage(event) {
    //Change selected language
    this.translateService.use(event.target.value);
    this.loadLineChartModel();
  }

  /**
   * Loads some translated variables and creates new chart model
   */
  loadLineChartModel() {
    this.translateService.get(['DAY', 'NIGHT', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY',
      'SUNDAY']).subscribe(translation => {
      let lineChartOption = {
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: [translation['DAY'], translation['NIGHT']],
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
          data: [translation['MONDAY'], translation['TUESDAY'], translation['WEDNESDAY'], translation['THURSDAY'],
            translation['FRIDAY'], translation['SATURDAY'], translation['SUNDAY']],
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
            name: translation['DAY'],
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
            name: translation['NIGHT'],
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
      this.lineChart.clear();
      this.lineChart.setOption(lineChartOption);
    });
  }

}

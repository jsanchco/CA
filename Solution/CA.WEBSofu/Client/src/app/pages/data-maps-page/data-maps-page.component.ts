import {Component, ElementRef, OnDestroy, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {Subject} from 'rxjs';
import {ResizeService} from '../../resize/resize.service';
import * as WorldDatamap from 'datamaps/dist/datamaps.world.min.js';
import * as UsaDatamap from 'datamaps/dist/datamaps.usa.min.js';
import * as d3 from 'd3';
import {CHART_COLOR_1, CHART_COLOR_2, CHART_COLOR_3, CHART_COLOR_4, CHART_COLOR_5} from '../../utils/colors';
import {pointPlugin} from '../../components/map/points-plugin';
import {takeUntil} from "rxjs/operators";

@Component({
  selector: 'app-data-maps-page',
  templateUrl: './data-maps-page.component.html',
  styleUrls: ['./data-maps-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DataMapsPageComponent implements OnInit, OnDestroy {
  // Data maps elements references and echarts instances
  @ViewChild('basicMap')
  basicMapElementRef: ElementRef;
  basicMap;
  @ViewChild('stateMap')
  stateMapElementRef: ElementRef;
  stateMap;
  @ViewChild('bubblesMap')
  bubblesMapElementRef: ElementRef;
  bubblesMap;
  @ViewChild('arcsMap')
  arcsMapElementRef: ElementRef;
  arcsMap;
  @ViewChild('projectionMap')
  projectionMapElementRef: ElementRef;
  projectionMap;
  @ViewChild('customMap')
  customMapElementRef: ElementRef;
  customMap;
  customMapBubbles;

  // Informer to stop using observables after component is destroyed
  private ngUnsubscribe: Subject<void> = new Subject<void>();

  constructor(private resizeService: ResizeService) {
  }

  ngOnInit() {
    this.basicMap = new WorldDatamap({
      element: this.basicMapElementRef.nativeElement,
      responsive: true
    });

    this.stateMap = new UsaDatamap({
      scope: 'usa',
      element: this.stateMapElementRef.nativeElement,
      responsive: true,
      geographyConfig: {
        highlightBorderColor: '#bada55',
        popupTemplate: function (geography, data) {
          return '<div class="hoverinfo">' + geography.properties.name + 'Electoral Votes:' + data.electoralVotes + ' '
        },
        highlightBorderWidth: 3
      },

      fills: {
        'Republican': '#CC4731',
        'Democrat': '#306596',
        'Heavy Democrat': '#667FAF',
        'Light Democrat': '#A9C0DE',
        'Heavy Republican': '#CA5E5B',
        'Light Republican': '#EAA9A8',
        defaultFill: '#EDDC4E'
      },
      data: {
        'AZ': {
          'fillKey': 'Republican',
          'electoralVotes': 5
        },
        'CO': {
          'fillKey': 'Light Democrat',
          'electoralVotes': 5
        },
        'DE': {
          'fillKey': 'Democrat',
          'electoralVotes': 32
        },
        'FL': {
          'fillKey': 'UNDECIDED',
          'electoralVotes': 29
        },
        'GA': {
          'fillKey': 'Republican',
          'electoralVotes': 32
        },
        'HI': {
          'fillKey': 'Democrat',
          'electoralVotes': 32
        },
        'ID': {
          'fillKey': 'Republican',
          'electoralVotes': 32
        },
        'IL': {
          'fillKey': 'Democrat',
          'electoralVotes': 32
        },
        'IN': {
          'fillKey': 'Republican',
          'electoralVotes': 11
        },
        'IA': {
          'fillKey': 'Light Democrat',
          'electoralVotes': 11
        },
        'KS': {
          'fillKey': 'Republican',
          'electoralVotes': 32
        },
        'KY': {
          'fillKey': 'Republican',
          'electoralVotes': 32
        },
        'LA': {
          'fillKey': 'Republican',
          'electoralVotes': 32
        },
        'MD': {
          'fillKey': 'Democrat',
          'electoralVotes': 32
        },
        'ME': {
          'fillKey': 'Democrat',
          'electoralVotes': 32
        },
        'MA': {
          'fillKey': 'Democrat',
          'electoralVotes': 32
        },
        'MN': {
          'fillKey': 'Democrat',
          'electoralVotes': 32
        },
        'MI': {
          'fillKey': 'Democrat',
          'electoralVotes': 32
        },
        'MS': {
          'fillKey': 'Republican',
          'electoralVotes': 32
        },
        'MO': {
          'fillKey': 'Republican',
          'electoralVotes': 13
        },
        'MT': {
          'fillKey': 'Republican',
          'electoralVotes': 32
        },
        'NC': {
          'fillKey': 'Light Republican',
          'electoralVotes': 32
        },
        'NE': {
          'fillKey': 'Republican',
          'electoralVotes': 32
        },
        'NV': {
          'fillKey': 'Heavy Democrat',
          'electoralVotes': 32
        },
        'NH': {
          'fillKey': 'Light Democrat',
          'electoralVotes': 32
        },
        'NJ': {
          'fillKey': 'Democrat',
          'electoralVotes': 32
        },
        'NY': {
          'fillKey': 'Democrat',
          'electoralVotes': 32
        },
        'ND': {
          'fillKey': 'Republican',
          'electoralVotes': 32
        },
        'NM': {
          'fillKey': 'Democrat',
          'electoralVotes': 32
        },
        'OH': {
          'fillKey': 'UNDECIDED',
          'electoralVotes': 32
        },
        'OK': {
          'fillKey': 'Republican',
          'electoralVotes': 32
        },
        'OR': {
          'fillKey': 'Democrat',
          'electoralVotes': 32
        },
        'PA': {
          'fillKey': 'Democrat',
          'electoralVotes': 32
        },
        'RI': {
          'fillKey': 'Democrat',
          'electoralVotes': 32
        },
        'SC': {
          'fillKey': 'Republican',
          'electoralVotes': 32
        },
        'SD': {
          'fillKey': 'Republican',
          'electoralVotes': 32
        },
        'TN': {
          'fillKey': 'Republican',
          'electoralVotes': 32
        },
        'TX': {
          'fillKey': 'Republican',
          'electoralVotes': 32
        },
        'UT': {
          'fillKey': 'Republican',
          'electoralVotes': 32
        },
        'WI': {
          'fillKey': 'Democrat',
          'electoralVotes': 32
        },
        'VA': {
          'fillKey': 'Light Democrat',
          'electoralVotes': 32
        },
        'VT': {
          'fillKey': 'Democrat',
          'electoralVotes': 32
        },
        'WA': {
          'fillKey': 'Democrat',
          'electoralVotes': 32
        },
        'WV': {
          'fillKey': 'Republican',
          'electoralVotes': 32
        },
        'WY': {
          'fillKey': 'Republican',
          'electoralVotes': 32
        },
        'CA': {
          'fillKey': 'Democrat',
          'electoralVotes': 32
        },
        'CT': {
          'fillKey': 'Democrat',
          'electoralVotes': 32
        },
        'AK': {
          'fillKey': 'Republican',
          'electoralVotes': 32
        },
        'AR': {
          'fillKey': 'Republican',
          'electoralVotes': 32
        },
        'AL': {
          'fillKey': 'Republican',
          'electoralVotes': 32
        }
      }
    });
    this.stateMap.labels();

    this.bubblesMap = new WorldDatamap({
      element: this.bubblesMapElementRef.nativeElement,
      scope: 'world',
      responsive: true,
      // Zoom in on Africa
      setProjection: function (element) {
        var projection = d3.geo.equirectangular()
          .center([23, -3])
          .rotate([4.4, 0, 0])
          .scale(400)
          .translate([element.offsetWidth / 2, element.offsetHeight / 2]);
        var path = d3.geo.path()
          .projection(projection);

        return {path: path, projection: projection};
      },
      fills: {
        defaultFill: '#ABDDA4',
        gt50: CHART_COLOR_1,
        eq50: CHART_COLOR_2,
        lt25: CHART_COLOR_3,
        gt75: CHART_COLOR_4,
        lt50: CHART_COLOR_5,
        eq0: CHART_COLOR_1,
        pink: '#0fa0fa',
        gt500: CHART_COLOR_2
      },
      data: {
        'ZAF': {fillKey: 'gt50'},
        'ZWE': {fillKey: 'lt25'},
        'NGA': {fillKey: 'lt50'},
        'MOZ': {fillKey: 'eq50'},
        'MDG': {fillKey: 'eq50'},
        'EGY': {fillKey: 'gt75'},
        'TZA': {fillKey: 'gt75'},
        'LBY': {fillKey: 'eq0'},
        'DZA': {fillKey: 'gt500'},
        'SSD': {fillKey: 'pink'},
        'SOM': {fillKey: 'gt50'},
        'GIB': {fillKey: 'eq50'},
        'AGO': {fillKey: 'lt50'}
      }
    });
    this.bubblesMap.bubbles([
      {name: 'Bubble 1', latitude: 21.32, longitude: -7.32, radius: 45, fillKey: 'gt500'},
      {name: 'Bubble 2', latitude: 12.32, longitude: 27.32, radius: 25, fillKey: 'eq0'},
      {name: 'Bubble 3', latitude: 0.32, longitude: 23.32, radius: 35, fillKey: 'lt25'},
      {name: 'Bubble 4', latitude: -31.32, longitude: 23.32, radius: 55, fillKey: 'eq50'},
    ], {
      animate: false,
      popupTemplate: function (geo, data) {
        return '<div class=\'hoverinfo\'>Bubble for ' + data.name + '';
      }
    });

    this.arcsMap = new UsaDatamap({
      element: this.arcsMapElementRef.nativeElement,
      responsive: true,
      scope: 'usa',
      fills: {
        defaultFill: '#ABDDA4',
        win: '#0fa0fa'
      },
      data: {
        'TX': {fillKey: 'win'},
        'FL': {fillKey: 'win'},
        'NC': {fillKey: 'win'},
        'CA': {fillKey: 'win'},
        'NY': {fillKey: 'win'},
        'CO': {fillKey: 'win'}
      }
    });
    // Arcs coordinates can be specified explicitly with latitude/longtitude,
    // or just the geographic center of the state/country.
    this.arcsMap.arc([
      {
        origin: 'CA',
        destination: 'TX'
      },
      {
        origin: 'OR',
        destination: 'TX'
      },
      {
        origin: 'NY',
        destination: 'TX'
      },
      {
        origin: {
          latitude: 40.639722,
          longitude: -73.778889
        },
        destination: {
          latitude: 37.618889,
          longitude: -122.375
        }
      },
      {
        origin: {
          latitude: 30.194444,
          longitude: -97.67
        },
        destination: {
          latitude: 25.793333,
          longitude: -80.290556
        },
        options: {
          strokeWidth: 2,
          strokeColor: 'rgba(100, 10, 200, 0.4)',
          greatArc: true
        }
      },
      {
        origin: {
          latitude: 39.861667,
          longitude: -104.673056
        },
        destination: {
          latitude: 35.877778,
          longitude: -78.7875
        }
      }
    ], {strokeWidth: 1, arcSharpness: 1.4});

    this.projectionMap = new WorldDatamap({
      scope: 'world',
      element: this.projectionMapElementRef.nativeElement,
      projection: 'orthographic',
      responsive: true,
      fills: {
        defaultFill: '#ABDDA4',
        gt50: CHART_COLOR_1,
        eq50: CHART_COLOR_2,
        lt25: CHART_COLOR_3,
        gt75: CHART_COLOR_4,
        lt50: CHART_COLOR_5,
        eq0: CHART_COLOR_1,
        pink: '#0fa0fa',
        gt500: CHART_COLOR_2
      },
      projectionConfig: {
        rotation: [97, -30]
      },
      data: {
        'USA': {fillKey: 'lt50'},
        'MEX': {fillKey: 'lt25'},
        'CAN': {fillKey: 'gt50'},
        'GTM': {fillKey: 'gt500'},
        'HND': {fillKey: 'eq50'},
        'BLZ': {fillKey: 'pink'},
        'GRL': {fillKey: 'eq0'}
      }
    });
    this.projectionMap.graticule();
    this.projectionMap.arc([{
      origin: {
        latitude: 61,
        longitude: -149
      },
      destination: {
        latitude: -22,
        longitude: -43
      }
    }], {
      greatArc: true,
      animationSpeed: 2000
    });

    this.createCustomMapBubblesData();
    this.customMap = new WorldDatamap({
      element: this.customMapElementRef.nativeElement,
      responsive: true,
      fills: {
        defaultFill: 'transparent',
        'color-type-1': CHART_COLOR_4,
        'color-type-2': CHART_COLOR_1,
        'color-type-3': '#40515d'
      },
      geographyConfig: {
        popupOnHover: false,
        highlightOnHover: false
      }
    });
    this.customMap.addPlugin('points', pointPlugin);
    this.customMap.points({});
    this.customMap.bubbles(this.customMapBubbles, {
      fillOpacity: 1,
      highlightOnHover: false,
      borderWidth: 0,
      borderOpacity: 0,
      animate: false,
      popupTemplate: function (geography, data) { // This function should just return a string
        return `
            <div class="tooltip bs-tooltip-top show" role="tooltip">
              <div class="tooltip-inner text-nowrap text-left">
                <div class="pl-1">${data.value}</div>
                <div><i class="material-icons pr-1 align-bottom"><span class="h6">location_on</span></i>${data.location}</div>
              </div>
            </div>`;
      }
    });

    this.resizeService.resizeInformer$.pipe(takeUntil(this.ngUnsubscribe)).subscribe(() => {
      this.basicMap.resize();
      this.stateMap.resize();
      this.bubblesMap.resize();
      this.arcsMap.resize();
      this.projectionMap.resize();
      this.customMap.resize();
    });
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  /**
   * Generates bubbles model for map
   */
  createCustomMapBubblesData() {
    this.customMapBubbles = [
      {
        radius: this.getBubbleRadiusInner(),
        latitude: 39.916667,
        longitude: 116.383333,
        fillKey: 'color-type-2'
      },
      {
        radius: this.getBubbleRadiusOuter(),
        latitude: 39.916667,
        longitude: 116.383333,
        popupOnHover: false,
        borderColor: CHART_COLOR_1,
        borderOpacity: 1,
        borderWidth: 2,
        value: '$ 155 289',
        location: 'Beijing, China',
      },
      {
        radius: this.getBubbleRadiusInner(),
        latitude: 48.8567,
        longitude: 2.3508,
        fillKey: 'color-type-1'
      },
      {
        radius: this.getBubbleRadiusOuter(),
        latitude: 48.8567,
        longitude: 2.3508,
        popupOnHover: false,
        borderColor: CHART_COLOR_4,
        borderOpacity: 1,
        borderWidth: 2,
        value: '$ 125 632',
        location: 'Paris, France'
      },
      {
        radius: this.getBubbleRadiusInner(),
        latitude: 59.916667,
        longitude: 10.733333,
        fillKey: 'color-type-2'
      },
      {
        radius: this.getBubbleRadiusOuter(),
        latitude: 59.916667,
        longitude: 10.733333,
        popupOnHover: false,
        borderColor: CHART_COLOR_1,
        borderOpacity: 1,
        borderWidth: 2,
        value: '$ 184 214',
        location: 'Oslo, Norway'
      },
      {
        radius: this.getBubbleRadiusInner(),
        latitude: 40.7127,
        longitude: -74.0059,
        value: '$ 632 373',
        location: 'New York, USA',
        fillKey: 'color-type-3'
      },
      {
        radius: this.getBubbleRadiusOuter(),
        latitude: 40.7127,
        longitude: -74.0059,
        popupOnHover: false,
        borderColor: '#40515d',
        borderOpacity: 1,
        borderWidth: 2,
        value: '$ 632 373',
        location: 'New York, USA'
      },
      {
        radius: this.getBubbleRadiusInner(),
        latitude: -22.908333,
        longitude: -43.196389,
        value: '$ 116 623',
        location: 'Rio de Janeiro, Brazil',
        fillKey: 'color-type-1'
      },
      {
        radius: this.getBubbleRadiusOuter(),
        latitude: -22.908333,
        longitude: -43.196389,
        popupOnHover: false,
        borderColor: CHART_COLOR_4,
        borderOpacity: 1,
        borderWidth: 2,
        value: '$ 116 623',
        location: 'Rio de Janeiro, Brazil'
      }
    ];
  }

  private getBubbleRadiusOuter() {
    return window.innerWidth < 700 ? 10 : 20;
  }

  private getBubbleRadiusInner() {
    return window.innerWidth < 700 ? 5 : 10;
  }

}

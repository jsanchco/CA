import {Component, HostListener, OnInit, ViewEncapsulation} from '@angular/core';
import {ResizeService} from '../../resize/resize.service';
import {TranslateService} from '@ngx-translate/core';
import {routerTransition} from '../../utils/page.animation';
import {Router} from '@angular/router';

import { StorageService } from '../../shared/services/storage.service';

/**
 * This page wraps all other pages in application, it contains header, side menu and router outlet for child pages
 */
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
  animations: [routerTransition],
  encapsulation: ViewEncapsulation.None
})

export class MainPageComponent implements OnInit {
  // Model for side menu
  menuModel = [
    {
      title: 'Dashboard',
      routerUrl: '/main/dashboard',
      iconClass: 'material-icons',
      iconCode: 'dashboard',
    },
    {
      title: 'User pages',
      iconClass: 'material-icons',
      iconCode: 'person',
      children: [
        {
          title: 'Login',
          routerUrl: '/login'
        },
        {
          title: 'Sing up',
          routerUrl: '/register'
        },
        {
          title: 'Profile',
          routerUrl: '/main/profile'
        },
        {
          title: 'Coming soon',
          routerUrl: '/coming-soon'
        },
        {
          title: 'Maintenance',
          routerUrl: '/maintenance'
        },
        {
          title: 'Not found',
          routerUrl: '/404'
        }
      ]
    },
    {
      title: 'Charts',
      iconClass: 'material-icons',
      iconCode: 'assessment',
      children: [
        {
          title: 'Line charts',
          routerUrl: '/main/linechart',
        },
        {
          title: 'Bar charts',
          routerUrl: '/main/barchart',
        },
        {
          title: 'Pie charts',
          routerUrl: '/main/piechart',
        },
        {
          title: 'Bubble charts',
          routerUrl: '/main/bubblechart',
        },
        {
          title: 'Heatmap',
          routerUrl: '/main/heatmap',
        },
        {
          title: 'Radar',
          routerUrl: '/main/radar',
        }
      ]
    },
    {
      title: 'Maps',
      iconClass: 'material-icons',
      iconCode: 'place',
      children: [
        {
          title: 'Google Maps',
          routerUrl: '/main/google-map',
        },
        {
          title: 'Data Maps',
          routerUrl: '/main/data-maps',
        }
      ]
    },
    {
      title: 'Label',
      count: 10,
      iconClass: 'material-icons',
      iconCode: 'label',
      routerUrl: '',
      children: []
    },
    {
      title: 'Multilevel',
      iconClass: 'material-icons',
      iconCode: 'clear_all',
      children: [
        {
          title: 'Level 1',
          children: [
            {
              title: 'Level 2',
            },
            {
              title: 'Level 2',
            },
            {
              title: 'Level 2',
            },
          ]
        },
        {
          title: 'Level 1',
        },
        {
          title: 'Level 1',
        },
      ]
    },
    {
      title: 'Buy Sofu',
      iconClass: 'material-icons',
      iconCode: 'star',
      externalUrl: 'https://themeforest.net/item/sofu-angular-5-bootstrap-4-admin-template/21363343',
      children: []
    }
  ];
  // Side menu options
  isSmallMenuMode = false;
  isMenuCollapsed = false;
  isMenuClosed = this.isSmallWidth();
  isOverlayMenuMode = this.isSmallWidth();
  // Side menu animation value. Is used for delay to render content after side panel changes
  sideNavTransitionDuration = 300;
  // Open/close options window
  isOptionsClosed = true;
  // Box layout option
  isBoxedLayout = false;
  // Fixed header option
  isFixedHeader = true;

  constructor(
    private resizeService: ResizeService,
    translateService: TranslateService,
    private router: Router,
    private storageService: StorageService) {
    this.onResize();
    // this language will be used as a fallback when a translation isn't found in the current language
    translateService.setDefaultLang('en');

    // the lang to use, if the lang isn't available, it will use the current loader to get them
    translateService.use('en');
  }

  /**
   * Window resize listener
   */
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.resizeService.resizeInformer$.next();
    if (this.isSmallWidth()) {
      this.isOverlayMenuMode = true;
      this.isMenuClosed = true;
      setTimeout(() => this.resizeService.resizeInformer$.next(), this.sideNavTransitionDuration + 700);
    }
  }

  /**
   * Call resize service after side panel mode changes
   */
  onSideNavModeChange() {
    setTimeout(() => {
      this.resizeService.resizeInformer$.next();
    }, this.sideNavTransitionDuration)
  }

  ngOnInit(): void {
  }

  /**
   * Call resize service after box mode changes
   */
  toggleBoxed() {
    this.isBoxedLayout = !this.isBoxedLayout;
    setTimeout(() => {
      this.resizeService.resizeInformer$.next()
    }, 0);
  }

  toggleCompactMenu() {
    this.isSmallMenuMode = !this.isSmallMenuMode;
    setTimeout(() => {
      this.resizeService.resizeInformer$.next()
    }, this.sideNavTransitionDuration);
  }

  /**
   * Call resize service after side panel mode changes
   */
  toggleOverlayMode() {
    this.isOverlayMenuMode = !this.isOverlayMenuMode;
    setTimeout(() => {
      this.resizeService.resizeInformer$.next()
    }, this.sideNavTransitionDuration);
  }

  /**
   * Changes header mode
   */
  toggleFixedHeader() {
    this.isFixedHeader = !this.isFixedHeader;
  }

  /**
   * Return url as state, that will trigger animation when url changes
   * @param outlet
   * @returns {string}
   */
  getState(outlet) {
    return this.router.url;
  }

  private isSmallWidth() {
    return window.innerWidth < 700;
  }

  public logout() {
    localStorage.removeItem('isLoggedin');
    this.storageService.logout();
  }
}

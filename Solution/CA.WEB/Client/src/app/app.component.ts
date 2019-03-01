import { Component, OnInit } from '@angular/core';

import { AuthenticationService } from './shared/services/authentication.service';
import { TranslationService } from './shared/services/translation.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    providers: [ AuthenticationService, TranslationService ]
})

export class AppComponent implements OnInit {
    constructor() { }

    // constructor(private translate: TranslateService) {
    //     translate.setDefaultLang('en');
    // }

    ngOnInit() {
    }
}

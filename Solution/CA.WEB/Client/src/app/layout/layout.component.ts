import { Component, OnInit } from '@angular/core';

// Pipes
import { TranslatePipe } from '../shared/pipes/translation.pipe';

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
    constructor() {}

    ngOnInit() {}
}

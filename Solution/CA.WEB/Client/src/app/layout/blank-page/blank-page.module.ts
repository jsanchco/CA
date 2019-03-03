import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlankPageRoutingModule } from './blank-page-routing.module';
import { BlankPageComponent } from './blank-page.component';

// Modules Shared
import { SharedModule } from '../../shared/shared.module';

@NgModule({
    imports: [
        CommonModule,
        BlankPageRoutingModule,
        SharedModule
    ],
    declarations: [
        BlankPageComponent
    ]
})

export class BlankPageModule {}

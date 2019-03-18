import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Pipes
import { TranslatePipe } from '../shared/pipes/translation.pipe';

// Services
import { AuthenticationService } from '../shared/services/authentication.service';
import { TranslationService } from '../shared/services/translation.service';


@NgModule({
  declarations: [
    TranslatePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TranslatePipe
  ],
  providers: [
    AuthenticationService,
    TranslationService
  ]
})

export class SharedModule { }

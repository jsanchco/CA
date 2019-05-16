import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Pipes
import { TranslatePipe } from '../shared/pipes/translation.pipe';
import { SafeHtmlPipe } from '../shared/pipes/safeHtml.pipe';

// Services
import { AuthenticationService } from '../shared/services/authentication.service';
import { TranslationService } from '../shared/services/translation.service';
import { WaitService } from '../shared/services/wait.service';
import { ToastService } from '../shared/services/toast.service';

@NgModule({
  declarations: [
    TranslatePipe,
    SafeHtmlPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TranslatePipe,
    SafeHtmlPipe
  ],
  providers: [
    AuthenticationService,
    TranslationService,
    WaitService,
    ToastService
  ]
})

export class SharedModule { }

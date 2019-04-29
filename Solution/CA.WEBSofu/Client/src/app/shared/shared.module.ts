import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Pipes
import { TranslatePipe } from '../shared/pipes/translation.pipe';

// Services
import { AuthenticationService } from '../shared/services/authentication.service';
import { TranslationService } from '../shared/services/translation.service';
import { WaitService } from '../shared/services/wait.service';
import { ToastService } from '../shared/services/toast.service';

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
    TranslationService,
    WaitService,
    ToastService
  ]
})

export class SharedModule { }

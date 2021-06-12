import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';
import { SecurityDataService } from './services/security.data.service';
import { SecurityService } from './services/security.service';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    FormsModule,
  ],
  exports: [LoginComponent],
  providers: [
    SecurityDataService,
    SecurityService,
  ]
})
export class AuthenticatorModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {
  OktaAuthModule
} from '@okta/okta-angular';

const config = {
  issuer: 'https://{oktaDomain}/oauth2/default',
  redirectUri: 'https://angular-5bkkhr.stackblitz.io/implicit/callback',
  clientId: '{clientId}',
  pkce: true
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OktaAuthModule.initAuth(config)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

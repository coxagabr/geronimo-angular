import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpeechBubbleComponent } from './speech-bubble/speech-bubble.component';
import { HqButtonComponent } from './hq-button/hq-button.component';
import { HttpClientModule } from '@angular/common/http';
import { DddButtonComponent } from './ddd-button/ddd-button.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GeronimoComponent } from './geronimo/geronimo.component';
import { EnterButtonComponent } from './enter-button/enter-button.component';

@NgModule({
  declarations: [
    AppComponent,
    SpeechBubbleComponent,
    HqButtonComponent,
    DddButtonComponent,
    GeronimoComponent,
    EnterButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpeechBubbleComponent } from './speech-bubble/speech-bubble.component';
import { HqButtonComponent } from './hq-button/hq-button.component';
import { HttpClientModule } from '@angular/common/http';
import { DddButtonComponent } from './ddd-button/ddd-button.component';

@NgModule({
  declarations: [
    AppComponent,
    SpeechBubbleComponent,
    HqButtonComponent,
    DddButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

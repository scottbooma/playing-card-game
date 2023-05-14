import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { PlayingFieldComponent } from './components/playing-field/playing-field.component';
import { PlayingCardComponent } from './components/playing-card/playing-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PlayingFieldComponent,
    PlayingCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

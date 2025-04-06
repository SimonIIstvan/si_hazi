import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FooldalComponent } from './fooldal/fooldal.component';
import { VideokartyakComponent } from './videokartyak/videokartyak.component';
import { RouterLink } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    FooldalComponent,
    VideokartyakComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    RouterLink
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

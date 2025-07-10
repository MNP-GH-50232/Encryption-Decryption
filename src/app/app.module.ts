import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { FormsModule } from '@angular/forms';
import { Encrypt2Component } from './encrypt2/encrypt2.component';
import { Encrypt3Component } from './encrypt3/encrypt3.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    
    Encrypt2Component,
         Encrypt3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

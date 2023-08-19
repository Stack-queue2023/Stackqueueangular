import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ManiComponent } from './mani/mani.component';
import { JeevaComponent } from './jeeva/jeeva.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ManiComponent,
    JeevaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

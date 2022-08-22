import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { NavComponent } from './nav/nav.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule],
  exports: [NavComponent],
  declarations: [ AppComponent, HelloComponent, NavComponent],
  bootstrap:    [ AppComponent, NavComponent]
})
export class AppModule { }

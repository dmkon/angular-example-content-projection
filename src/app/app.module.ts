import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ClosableWellComponent } from './closable-well/closable-well.component';


@NgModule({
  declarations: [
    AppComponent,
    ClosableWellComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

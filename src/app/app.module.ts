import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { ResultListComponent } from './result-list/result-list.component';
import {HttpClientModule} from '@angular/common/http';
import { GifdetailsComponent } from './gifdetails/gifdetails.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms'
@NgModule({
  declarations: [
    AppComponent,
    SearchbarComponent,
    ResultListComponent,
    GifdetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

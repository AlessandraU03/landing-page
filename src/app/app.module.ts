import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DashboardMovieComponent } from './movie/dashboard-movie/dashboard-movie.component';
import { HeaderMovieComponent } from './movie/header-movie/header-movie.component';
import { ContentMovieComponent } from './movie/content-movie/content-movie.component';
import { FooterMovieComponent } from './movie/footer-movie/footer-movie.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardMovieComponent,
    HeaderMovieComponent,
    ContentMovieComponent,
    FooterMovieComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

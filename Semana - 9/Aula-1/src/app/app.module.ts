import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CardComponent } from 'src/components/card/card.component';
import { HomeComponent } from 'src/components/home/home.component';
import { ListEpisodesComponent } from 'src/components/list-episodes/list-episodes.component';
import { SeriesComponent } from 'src/components/series/series.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    ListEpisodesComponent,
    SeriesComponent,
    HomeComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }

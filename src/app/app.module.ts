import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { OAuthModule } from 'angular-oauth2-oidc';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { MatExpansionModule } from '@angular/material/expansion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material';
import { MatIconModule } from '@angular/material';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TrackListComponent } from './track-list/track-list.component';
import { ArtistListComponent } from './artist-list/artist-list.component';
import { AboutComponent } from './about/about.component';
import { AppRoutingModule } from './app-routing.module';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TrackListComponent,
    ArtistListComponent,
    AboutComponent,
    MainComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    HttpModule,
    MatExpansionModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatIconModule,
    AppRoutingModule,
    OAuthModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

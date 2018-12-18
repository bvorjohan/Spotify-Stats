import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TrackListComponent } from './track-list/track-list.component';
import { ArtistListComponent } from './artist-list/artist-list.component';
import { AboutComponent } from './about/about.component';
import { MainComponent } from './main/main.component';
// import { HomeComponent } from './home/home.component';
// import { AllCountriesComponent } from './all-countries/all-countries.component';
// import { CountryDetailComponent } from './country-detail/country-detail.component';

const routes: Routes = [
    { path: '', redirectTo: '/main', pathMatch: 'full' },
    { path: 'main', component: MainComponent },
    { path: 'about', component: AboutComponent },
    // { path: 'detail/:name', component: CountryDetailComponent },
    // { path: 'all-countries', component: AllCountriesComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }

import { Routes } from '@angular/router';
import { ArtistComponent } from './components/artist/artist.component';
import { ArtistsComponent } from './components/artists/artists.component';

import { HomeComponent } from './components/home/home.component';

export const GuestLayoutRoutes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    component: HomeComponent,
    path: 'home',
  },
  {
    component: ArtistsComponent,
    path: 'artists',
  },
  {
    component: ArtistComponent,
    path: 'artist/:id',
},
];

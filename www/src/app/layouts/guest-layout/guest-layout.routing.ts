import { Routes } from '@angular/router';
import { ArtistsComponent } from './components/artists/artists.component';

import { HomeComponent } from './components/home/home.component';

export const GuestLayoutRoutes: Routes = [
    {
      component: HomeComponent,
      path: 'home',
    },
    {
      component: ArtistsComponent,
      path: 'artists',
    },
];

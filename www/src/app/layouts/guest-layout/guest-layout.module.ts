import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GuestLayoutRoutes } from './guest-layout.routing';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatRippleModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';
import { HomeComponent } from './components/home/home.component';
import { ArtistsComponent } from './components/artists/artists.component';
import { ArtistComponent } from './components/artist/artist.component';
import { SourcesComponent } from './components/sources/sources.component';
import { SourceArtistsComponent } from './components/source-artists/source-artists.component';
import { PipesModule } from 'app/pipes/pipes.module';
import { PaginatedComponent } from './components/paginated/paginated.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(GuestLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    PipesModule,
  ],
  declarations: [
    HomeComponent,
    ArtistsComponent,
    ArtistComponent,
    SourcesComponent,
    SourceArtistsComponent,
    PaginatedComponent,
  ]
})

export class GuestLayoutModule {}

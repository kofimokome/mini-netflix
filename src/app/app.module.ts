import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MovieService} from './services/movie.service';
import { HomeComponent } from './views/home/home.component';
import { FavoriteComponent } from './views/favorite/favorite.component';
import { MovieDetailsComponent } from './views/movie-details/movie-details.component';
import { MovieComponent } from './views/movie/movie.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FavoriteComponent,
    MovieDetailsComponent,
    MovieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [MovieService],
  bootstrap: [HomeComponent]
})
export class AppModule {
}

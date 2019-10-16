import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MovieDetailsComponent} from './views/movie-details/movie-details.component';
import {HomeComponent} from './views/home/home.component';
import {FavoriteComponent} from './views/favorite/favorite.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'details/:id', component: MovieDetailsComponent},
  {path: 'favorites', component: FavoriteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

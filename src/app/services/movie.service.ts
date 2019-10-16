import {Injectable} from '@angular/core';
import {Movie} from '../models/movie';
import movies from '../mock/movies';
import {isNull} from 'util';

@Injectable({
  providedIn: 'root'
})

export class MovieService {

  private movies: Movie[];

  constructor() {
    this.movies = movies;
  }

  isMovieStared(id: number) {
    const favorites = JSON.parse('[' + localStorage.getItem('favorites') + ']');
    for (const favorite in favorites) {
      if (+id === +favorites[favorite]) {
        return true;
      }
    }
    return false;
  }

  getMovies(starred = false) {
    if (starred) {
      return this.movies.filter(movie => this.isMovieStared(movie.id));
    } else {
      return this.movies;
    }
  }

  getMovie(id: number) {
    return this.movies.filter(movie => movie.id === id);
  }

  searchMovies(term: string) {
    const pattern = new RegExp(term);
    return this.movies.filter(movie => pattern.test(movie.title));
  }

  starMovie(id: string) {
    if (localStorage.getItem('favorites') === null || localStorage.getItem('favorites') === '') {
      localStorage.setItem('favorites', id);
    } else {
      localStorage.setItem('favorites', localStorage.getItem('favorites') + ',' + id);
    }
  }

  unStarMovie(id: number) {
    let favorites = JSON.parse('[' + localStorage.getItem('favorites') + ']');
    favorites = favorites.filter(favorite => favorite !== id);
    localStorage.setItem('favorites', favorites.toString());
  }

}

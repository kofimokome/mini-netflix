import {Injectable} from '@angular/core';
import {Movie} from '../models/movie';
import movies from '../mock/movies';

@Injectable({
  providedIn: 'root'
})

export class MovieService {

  private movies: Movie[];

  constructor() {
    this.movies = movies;
  }

  private isMovieStared(id: number, starredIds: number[]) {
    let starred = false;
    for (const starredId in starredIds) {
      if (+id === +starredId) {
        starred = true;
      }
    }
    return starred;
  }

  getMovies(ids: number[] = []) {
    if (ids.length > 0) {
      return this.movies.filter(movie => this.isMovieStared(movie.id, ids));
    } else {
      return this.movies;
    }
  }

  getMovie(id: number) {
    // todo: get movie by id and return
  }

  starMovie(id: number) {
    // todo: add the movies to list of stared movies
    // use local storage to do this. Array map function or foreach or for loop?
  }

  unStarMovie(id: number) {
    // todo: add the movies to list of stared movies
    // use local storage to do this. Array map function or foreach or for loop?
  }

}

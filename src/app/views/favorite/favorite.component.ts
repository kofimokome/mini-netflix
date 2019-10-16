import {Component, OnInit} from '@angular/core';
import {MovieService} from '../../services/movie.service';
import {Movie} from '../../models/movie';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss']
})
export class FavoriteComponent implements OnInit {

  movies: Movie[];

  constructor(private movieService: MovieService) {
  }

  ngOnInit() {
    this.getMovies();
  }

  getMovies() {
    this.movies = this.movieService.getMovies(true);

  }

  handleStarred(value: any) {
    if (!value) {
      this.getMovies();
    }
  }

}

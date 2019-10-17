import {Component, Input, OnInit} from '@angular/core';
import {Movie} from '../../models/movie';
import {MovieService} from '../../services/movie.service';

@Component({
  selector: 'app-root',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private movies: Movie[];
  searchTerm: string;

  constructor(private movieService: MovieService) {
  }

  ngOnInit() {
    this.movies = this.movieService.getMovies();
  }

  search() {
    // hh
    this.movies = this.movieService.searchMovies(this.searchTerm);
  }
}

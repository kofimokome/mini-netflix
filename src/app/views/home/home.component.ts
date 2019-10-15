import {Component, OnInit} from '@angular/core';
import {Movie} from '../../models/movie';
import {MovieService} from '../../services/movie.service';

@Component({
  selector: 'app-root',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private movies: Movie[];

  constructor(movieService: MovieService) {
    this.movies = movieService.getMovies();
  }

  ngOnInit() {
  }

}

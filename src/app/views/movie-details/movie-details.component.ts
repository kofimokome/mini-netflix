import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {switchMap} from 'rxjs/operators';
import {Movie} from '../../models/movie';
import {MovieService} from '../../services/movie.service';
import {faStar} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {

  movieID: number;
  movie: Movie;
  starred: boolean;
  faStar = faStar;

  constructor(private route: ActivatedRoute, private movieService: MovieService) {
  }


  ngOnInit() {
    this.movieID = +this.route.snapshot.paramMap.get('id');
    this.movie = this.movieService.getMovie(this.movieID)[0];
    this.starred = this.movieService.isMovieStared(this.movieID);
  }

  starMovie() {
    this.movieService.starMovie('' + this.movieID);
    this.starred = true;
  }

  unStarMovie() {
    this.movieService.unStarMovie(this.movieID);
    this.starred = false;
  }
}

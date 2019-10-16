import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Movie} from '../../models/movie';
import {Router} from '@angular/router';
import {MovieService} from '../../services/movie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  @Input() movie: Movie;
  @Output() onStarred = new EventEmitter();
  starred: boolean;

  constructor(private router: Router, private movieService: MovieService) {
  }

  ngOnInit() {
    this.starred = this.movieService.isMovieStared(this.movie.id);
  }

  viewDetails(id: number) {
    this.router.navigate(['/details/', id]);
  }

  starMovie(id: any) {
    this.movieService.starMovie(id);
    this.starred = true;
    this.onStarred.emit(true);
  }

  unStarMovie(id: any) {
    this.movieService.unStarMovie(id);
    this.starred = false;
    this.onStarred.emit(false);
  }

}

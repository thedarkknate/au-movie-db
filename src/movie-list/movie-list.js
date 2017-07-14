import {MovieRepo} from 'services/movie-repo';

export class MovieList {
  static inject() {
    return [MovieRepo];
  }

  constructor(movieRepo) {
    this.movieRepo = movieRepo;
    this.movies = [];
    this.movieSearchField = '';
    this.missingImage = '../img/no-poster.jpg';
  }

  getMovieSearchResults() {
    var replaced = this.movieSearchField.replace(/\s+/g, '+');
    this.movieRepo.getMovieSearchResults(replaced)
      .then(movies => {
      this.movies = movies;
    })
      .catch(error => {
      console.log(error);
    });
  }
  
}
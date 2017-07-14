import {MovieRepo} from 'services/movie-repo';

export class MovieDetails {
  static inject() {
    return [MovieRepo];
  }

  constructor(movieRepo) {
    this.movieRepo = movieRepo;
    this.movie = '';
    this.missingMoviePoster = '../img/no-poster.jpg';
    this.missingActorPic = '../img/no-actor.jpg';
    this.defaultBackgroundImage = '../img/default-bg.png';
  }
  
  activate(params) {
    this.movieRepo.getMovieDetails(params.id)
      .then(data => {
      this.movie = data;
      console.log(this.movie);
    })
      .catch(error => {
      console.log(error);
    });
  }
  
}
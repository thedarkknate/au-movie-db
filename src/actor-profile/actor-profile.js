import {MovieRepo} from 'services/movie-repo';

export class ActorProfile {
  static inject() {
    return [MovieRepo];
  }

  constructor(movieRepo) {
    this.movieRepo = movieRepo;
    this.actor = '';
    this.missingActorPic = '../img/no-actor.jpg';
    this.missingMoviePoster = '../img/no-poster.jpg';
    this.defaultBackgroundImage = '../img/default-bg.png';
  }
  
  activate(params) {
    this.movieRepo.getActorProfile(params.id)
      .then(data => {
      this.actor = data;
      console.log(this.actor);
    })
      .catch(error => {
      console.log(error);
    });
  }
  
}
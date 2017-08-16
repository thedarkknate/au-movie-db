import {HttpClient} from 'aurelia-fetch-client';
import 'fetch';

export class MovieRepo {
  static inject() {
    return [HttpClient];
  }

  constructor(httpClient) {
    this.httpClient = httpClient;
    this.apiKey = '62d49353ca5dcfe0b289e0056822b14b';
  }

  getMovieSearchResults(searchString) {
    return new Promise((resolve, reject) => {
      this.httpClient.fetch(`http://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${searchString}&page=1&include_adult=false`)
        .then(response => response.json())
        .then(data => {
        resolve(data.results);
      })
        .catch(error => {
        reject(error);
      });
    });
  }  

  getMovieDetails(movieId) {
    return new Promise((resolve, reject) => {
      this.httpClient.fetch(`http://api.themoviedb.org/3/movie/${movieId}?api_key=${this.apiKey}&append_to_response=credits`)
        .then(response => response.json())
        .then(data => {
        resolve(data);
      })
        .catch(error => {
        reject(error);
      });
    });
  }

  getActorProfile(actorId) {
    return new Promise((resolve, reject) => {
      this.httpClient.fetch(`http://api.themoviedb.org/3/person/${actorId}?api_key=${this.apiKey}&append_to_response=movie_credits`)
        .then(response => response.json())
        .then(data => {
        resolve(data);
      })
        .catch(error => {
        reject(error);
      });
    });
  }
}
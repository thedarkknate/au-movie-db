export class App {
  configureRouter(config, router) {
    config.title = 'Aurelia';
    config.map([
//      { route: ['', 'welcome'], name: 'welcome',      moduleId: 'welcome',      nav: true, title: 'Welcome' },
//      { route: 'users',         name: 'users',        moduleId: 'users',        nav: true, title: 'Github Users' },
//      { route: 'child-router',  name: 'child-router', moduleId: 'child-router', nav: true, title: 'Child Router' },
      { route: '',  name: 'movies', moduleId: './movie-list/movie-list', nav: true, title: 'Movies' },
      { route: 'movie/:id',  name: 'movie-details', moduleId: './movie-details/movie-details', title: 'Movie Details' },
      { route: 'actor/:id',  name: 'actor-profile', moduleId: './actor-profile/actor-profile', title: 'Actor Profile' }
    ]);

    this.router = router;
  }
}

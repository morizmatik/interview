import EmberRouter from '@ember/routing/router';
import config from 'interview/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('candidates', function () {
    this.route('add');
    this.route('change', { path: '/:id' });
  });
  this.route('questions', function () {
    this.route('add');
    this.route('change', { path: '/:id' });
  });
  this.route('interviews', function () {
    this.route('add');
  });
});

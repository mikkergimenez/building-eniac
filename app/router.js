import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('index', { path: '/' });
  this.route('index', { path: '/:chapter_id' });
  this.route('references');
  this.route('game');
  this.route('title');
});

export default Router;

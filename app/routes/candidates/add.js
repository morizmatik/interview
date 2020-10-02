import Route from '@ember/routing/route';
import { hash } from 'rsvp';

export default class CandidatesAddRoute extends Route {
  model() {
    return hash({
      candidate: this.store.createRecord('candidate', {}),
      posts: this.store.findAll('post'),
    });
  }
}

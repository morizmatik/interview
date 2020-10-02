import Route from '@ember/routing/route';
import { hash } from 'rsvp';

export default class CandidatesChangeRoute extends Route {
  model(params) {
    return hash({
      candidate: this.store.findRecord('candidate', params.id),
      posts: this.store.findAll('post'),
    });
  }
}

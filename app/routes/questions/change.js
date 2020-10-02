import Route from '@ember/routing/route';
import { hash } from 'rsvp';

export default class QuestionsChangeRoute extends Route {
  model(params) {
    return hash({
      question: this.store.findRecord('question', params.id),
      posts: this.store.findAll('post'),
    });
  }
}

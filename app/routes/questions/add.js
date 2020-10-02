import Route from '@ember/routing/route';
import { hash } from 'rsvp';

export default class QuestionsAddRoute extends Route {
  model() {
    return hash({
      question: this.store.createRecord('question', {}),
      posts: this.store.findAll('post'),
    });
  }
}

import MainFormComponent from '../main/form';
import { action } from '@ember/object';

export default class QuestionsFormComponent extends MainFormComponent {
  levels = [1, 2, 3, 4, 5];
  model = this.args.question;

  @action
  setPost(post) {
    this.model.post = post;
  }

  @action
  setComplexity(complexity) {
    this.model.set('complexity', complexity);
  }

  @action
  updateAnswer(event) {
    this.model.set('answer', event.target.value);
  }

  @action
  updateText(event) {
    this.model.set('text', event.target.value);
  }
}

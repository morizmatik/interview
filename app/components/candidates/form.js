import MainFormComponent from '../main/form';
import { action } from '@ember/object';

export default class CandidatesFormComponent extends MainFormComponent {
  model = this.args.candidate;
  objectName = 'Кандиат';

  @action
  setPost(post) {
    this.model.set('post', post);
  }

  @action
  updateName(event) {
    this.model.set('name', event.target.value);
  }
}

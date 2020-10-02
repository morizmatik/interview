import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class MainFormComponent extends Component {
  @service router;
  @service notify;

  model = this.args.model;
  objectName = 'Объект';

  transitionToSuccess() {
    this.router.transitionTo(this.router.currentRoute.parent.name);
  }

  @action
  save(e) {
    e.preventDefault();
    this.model
      .save()
      .then((model) => {
        this.notify.alert(
          `${this.objectName} № ${model.id} был успешно ${
            model.id ? 'изменен' : 'удален'
          }`
        );
      })
      .then(() => this.transitionToSuccess());
  }

  @action
  remove() {
    this.model
      .destroyRecord()
      .then((model) => {
        this.notify.success(
          `${this.objectName}  № ${model.id} был успешно удален`
        );
      })
      .then(() => this.transitionToSuccess());
  }

  @action
  reset() {
    if (!this.model.id) {
      this.model.deleteRecord();
      return this.transitionToSuccess();
    }

    this.model.rollbackAttributes();
    this.transitionToSuccess();
  }
}

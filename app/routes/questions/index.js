import Route from '@ember/routing/route';
import { hash } from 'rsvp';

export default class QuestionsIndexRoute extends Route {
  queryParams = {
    post: {
      refreshModel: true,
    },
    page: {
      refreshModel: true,
    },
    sortBy: {
      refreshModel: true,
    },
  };
  beforeModel() {
    // fetch('https://interview-system/api/base64')
    //   .then((response) => response.blob())
    //   .then((response) => {
    //     let reader = new FileReader();
    //     reader.readAsText(response);
    //     reader.onload = function () {
    //       console.log('BASE64 FROM /base64', reader.result);
    //     };
    //   });

    fetch('https://interview-system/api/binary')
      .then((response) => response.blob())
      .then((response) => {
        let reader = new FileReader();
        reader.readAsArrayBuffer(response);
        reader.onload = function () {
          console.log('BINARY FROM /binary', reader.result);
        };
      });

    this.controllerFor('application').set('routeTitle', 'Вопросы');
  }
  setupController(controller, model) {
    controller.set('model', model.questions);
    controller.set('posts', model.posts);
    controller.set('totalPages', model.questions.meta.totalPages);
  }
  model(params) {
    return hash({
      questions: this.store.query('question', params),
      posts: this.store.findAll('post'),
    });
  }
}

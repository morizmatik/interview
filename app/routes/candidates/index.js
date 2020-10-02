import Route from '@ember/routing/route';

export default class CandidatesIndexRoute extends Route {
  beforeModel() {
    this.controllerFor('application').set('routeTitle', 'Кандидаты');
  }
  model() {
    return this.store.findAll('candidate');
  }
}

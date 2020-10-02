import Route from "@ember/routing/route";

export default class InterviewsIndexRoute extends Route {
  beforeModel() {
    this.controllerFor("application").set("routeTitle", "Интервью");
  }
  model() {
    return this.store.findAll("interview");
  }
}

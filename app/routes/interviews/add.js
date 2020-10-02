import Route from "@ember/routing/route";

export default class InterviewsAddRoute extends Route {
  model() {
    return this.store.createRecord("interview", {});
  }
}

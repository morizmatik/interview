import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { alias } from '@ember/object/computed';
import { action } from '@ember/object';
import pagedArray from 'ember-cli-pagination/computed/paged-array';

export default class QuestionsIndexController extends Controller {
  queryParams = ['page', 'perPage', 'post', 'sortBy'];
  @tracked sortBy;
  @tracked page = 1;
  @tracked perPage = 10;
  @tracked post;
  @tracked totalPages = this.model.meta.totalPages;
  @tracked selectedPost;

  @pagedArray('model', {
    page: alias('parent.page'),
    perPage: alias('parent.perPage'),
    totalPages: alias('parent.totalPages'),
  })
  pagedContent;

  @action
  setPost(post) {
    this.post = post.id;
    this.selectedPost = post;
  }

  @action
  sortBycomplexity() {
    const complexity = 'complexity';

    switch (this.sortBy) {
      case complexity:
        this.sortBy = `-${complexity}`;
        break;
      case `-${complexity}`:
        this.sortBy = undefined;
        break;
      default:
        this.sortBy = complexity;
    }
  }
}

import Model, { attr, belongsTo } from '@ember-data/model';

export default class QuestionModel extends Model {
  @attr('string') text;
  @attr('string') answer;
  @attr('number') complexity;
  @belongsTo() post;
}

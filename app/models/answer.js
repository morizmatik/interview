import Model, { belongsTo, attr } from '@ember-data/model';

export default class AnswerModel extends Model {
  @attr('string') text;
  @belongsTo() question;
}

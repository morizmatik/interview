import Model, { attr, belongsTo, hasMany } from '@ember-data/model';

export default class InterviewModel extends Model {
  @belongsTo() candidate;
  @hasMany() answers;
  @attr('string') date;
  @attr('boolean') result;
  @belongsTo() post;
}

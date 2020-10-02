import Model, { attr, belongsTo, hasMany } from '@ember-data/model';

export default class CandidateModel extends Model {
  @attr('string') name;
  @belongsTo() post;
  @hasMany() interviews;
}

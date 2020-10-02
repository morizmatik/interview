import { Model, belongsTo, hasMany } from 'ember-cli-mirage';

export default Model.extend({
  candidate: belongsTo(),
  post: belongsTo(),
  answers: hasMany(),
});

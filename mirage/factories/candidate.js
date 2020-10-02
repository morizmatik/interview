import { Factory } from 'ember-cli-mirage';
import faker from 'faker';
faker.locale = 'ru';
export default Factory.extend({
  name: () => faker.name.findName(),
});

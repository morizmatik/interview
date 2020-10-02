import { Factory } from 'ember-cli-mirage';
import faker from 'faker';

export default Factory.extend({
  date: () => faker.date.past(),
  result: () => {
    const results = [true, false, undefined];
    return results[Math.floor(Math.random() * results.length)];
  },
});

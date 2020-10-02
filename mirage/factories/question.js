import { Factory } from 'ember-cli-mirage';
import faker from 'faker';
faker.locale = 'ru';
export default Factory.extend({
  text: () => `QUESTION_${faker.lorem.word()}`,
  answer: () => `RIGHT_ANSWER_${faker.lorem.word()}`,
  complexity: () => faker.random.number(5),
});

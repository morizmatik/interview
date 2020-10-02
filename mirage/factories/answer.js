import { Factory } from "ember-cli-mirage";
import faker from "faker";

export default Factory.extend({
  text: () => `CANDIDATE_ANSWER_${faker.lorem.text(20)}`,
});

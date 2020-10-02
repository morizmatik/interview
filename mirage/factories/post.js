import { Factory } from 'ember-cli-mirage';

export const posts = [
  { title: 'frontend', level: 'junior' },
  { title: 'frontend', level: 'middle' },
  { title: 'frontend', level: 'senior' },
  { title: 'frontend', level: 'lead' },
  { title: 'backend', level: 'junior' },
  { title: 'backend', level: 'middle' },
  { title: 'backend', level: 'senior' },
  { title: 'backend', level: 'lead' },
];
export default Factory.extend({
  title: (i) => posts[i].title,
  level: (i) => posts[i].level,
});

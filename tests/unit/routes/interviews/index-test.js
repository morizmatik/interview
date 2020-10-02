import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | interviews/index', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:interviews/index');
    assert.ok(route);
  });
});

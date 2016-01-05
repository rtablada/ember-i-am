import Ember from 'ember';
import IAmMixin from 'ember-i-am/mixins/i-am';
import { module, test } from 'qunit';

module('Unit | Mixin | i am');

test('it can compute a role not exisiting if there are no roles', function(assert) {
  let IAmObject = Ember.Object.extend(IAmMixin);
  let subject = IAmObject.create();

  assert.equal(subject.get('isAdmin'), false);
});

test('it can compute when the role exists', function(assert) {
  let IAmObject = Ember.Object.extend(IAmMixin);
  let subject = IAmObject.create({
    roles: ['admin'],
  });

  assert.equal(subject.get('isAdmin'), true);
});

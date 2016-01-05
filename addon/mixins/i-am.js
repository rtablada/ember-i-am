import Ember from 'ember';
let {isArray} = Ember;

export default Ember.Mixin.create({
  unknownProperty(property) {
    if (property === 'roles') {
      return;
    }

    let match = property.match(/^is(.*)/);
    let roles = this.get('roles');

    if (match && isArray(roles)) {
      let [, roleName] = match;
      return roles.indexOf(Ember.String.dasherize(roleName)) > -1;
    }

    return false;
  },
});

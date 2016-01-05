# Ember-i-am

This addon provides a simple mixin to see if a user role exists on a user

## Installation

* `ember install ember-i-am`

## Use

Add the `i-am` mixin to your user model (or any Ember Object):

```js
import DS from 'ember-data';
import IAm from 'ember-i-am/mixins/i-am';

export default DS.Model.extend(IAm, {
  roles: DS.attr(),
});
```

Then to check if a user has a role:

```js
let user = this.store.find('user', 1).then((user) => {
  // checks if the user roles array contains `admin`
  user.get('isAdmin');
});
```

import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    goTo(routeName) {
      this.get('goTo')(routeName);
    }
  }
});

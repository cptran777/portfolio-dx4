import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    goTo(routeName) {
      this.transitionToRoute(routeName);
    }
  }
});

import Ember from 'ember';

export default Ember.Component.extend({
  expandSkills: false,
  expandProjects: false,
  actions: {
    toggleSkills() {
      this.toggleProperty('expandSkills');
    },
    toggleProjects() {
      this.toggleProperty('expandProjects');
    }
  }
});

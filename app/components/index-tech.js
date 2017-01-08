import Ember from 'ember';

export default Ember.Component.extend({
  expandSkills: false,
  expandProjects: false,
  hideSkills: false,
  hideProjects: false,
  actions: {
    toggleSkills() {
      this.toggleProperty('expandSkills');
      if (this.get('expandSkills')) {
        this.toggleProperty('hideProjects');
      } else {
        setTimeout(() => {
          this.toggleProperty('hideProjects');
        }, 1050);
      }
    },
    toggleProjects() {
      this.toggleProperty('expandProjects');
      if (this.get('expandProjects')) {
        this.toggleProperty('hideSkills');
      } else {
        setTimeout(() => {
          this.toggleProperty('hideSkills');
        }, 1050);
      }
    }
  }
});

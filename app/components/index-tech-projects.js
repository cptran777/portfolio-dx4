import Ember from 'ember';

const projectListMain = ['avalon.png', 'reeltime.png', 'labit.png'];
// const projectListOther = [];
// const projectListProgress = [];

const concatAll = (str, arr) => {
  return arr.map((item) => {
    return str + item;
  });
};

const capitalize = (str) => {
  return str[0].toUpperCase() + str.slice(1);
};

export default Ember.Component.extend({
  mainProjects: concatAll('assets/images/project-', projectListMain).map((path) => {
    return {
      name: capitalize(path.split(/[-.]/)[1]),
      path
    };
  })

});

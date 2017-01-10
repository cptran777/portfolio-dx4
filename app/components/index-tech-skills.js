import Ember from 'ember';

const skillListA = ['js.png', 'html5.png', 'css3.png', 'jquery.gif', 'react.png', 'redux.png'];
const skillListB = ['ember.png', 'angular.png', 'reactnative.png', 'node.png', 'express.png', 'websocket.png'];
const skillListC = ['threejs.png', 'webrtc.png', 'd3.png', 'createjs.png', 'ajax.png', 'heroku.png'];
const skillListD = ['mysql.png', 'redis.png', 'mongodb.png', 'postgres.png', 'bootstrap.png', 'c.png'];

const concatAll = (str, arr) => {
  return arr.map((item) => {
    return str + item;
  });
};

export default Ember.Component.extend({
  skillLogoA: concatAll('assets/images/logo-', skillListA),
  skillLogoB: concatAll('assets/images/logo-', skillListB),
  skillLogoC: concatAll('assets/images/logo-', skillListC),
  skillLogoD: concatAll('assets/images/logo-', skillListD)
});

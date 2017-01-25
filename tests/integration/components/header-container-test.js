import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('header-container', 'Integration | Component | header container', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{header-container}}`);

  // Test for rendering
  assert.ok(this.$('header'));

});

test('it allows navigation on the bar', function(assert) {

  this.set('externalAction', (actual) => {
    let expected = 'portfolio';
    assert.equal(actual, expected, 'clicked link will pass that path name to the action');
  });

  this.render(hbs`{{header-container goTo=(action externalAction)}}`);

  this.$('#portfolio-link').click();

});
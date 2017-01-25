import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('index-tech', 'Integration | Component | index tech', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{index-tech}}`);

  assert.ok(this.$());

});

test('it resizes when clicked', function(assert) {

  this.render(hbs`{{index-tech}}`);

  this.$('#skills-box').click();

  assert.equal(this.$('#skills-box').hasClass('col-md-12'), true);
  assert.equal(this.$('#projects-box').hasClass('hide'), true);
});

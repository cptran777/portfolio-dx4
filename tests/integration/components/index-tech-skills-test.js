import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('index-tech-skills', 'Integration | Component | index tech skills', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{index-tech-skills}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#index-tech-skills}}
      template block text
    {{/index-tech-skills}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});

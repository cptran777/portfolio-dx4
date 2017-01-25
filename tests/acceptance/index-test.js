import { test } from 'qunit';
import moduleForAcceptance from 'portfolio-dx4/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | index');

test('visiting /', function(assert) {
  visit('/');

  click('#portfolio-link');

  andThen(function() {
    assert.equal(currentURL(), '/portfolio', 'clicking on navbar link leads to desired page');
  });
});



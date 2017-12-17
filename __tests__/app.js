'use strict';
const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

describe('generator-jhipster-ci-circleci:app', () => {
  beforeAll(() => {
    return helpers
      .run(path.join(__dirname, '../generators/app'))
      .withPrompts({ override: true });
  });

  it('creates files', () => {
    assert.file(['.circleci/config.yml']);
  });
});

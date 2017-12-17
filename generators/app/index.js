'use strict';
const Generator = require('yeoman-generator');
const yosay = require('yosay');

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(yosay('Welcome to the JHipster CircleCI 2 configuration file generator!'));

    if (this.fs.exists(this.destinationPath('.circleci/config.yml'))) {
      const prompts = [
        {
          type: 'confirm',
          name: 'override',
          message: 'Would you like to override existing Circle CI configuration file?',
          default: true
        }
      ];

      return this.prompt(prompts).then(props => {
        // To access props later use this.props.someAnswer;
        this.props = props;
      });
    }
    this.props = {
      override: true
    };
  }

  writing() {
    if (this.props.override) {
      this.fs.copy(
        this.templatePath('circleci.yml'),
        this.destinationPath('.circleci/config.yml')
      );
      this.log('Circle CI configuration file has been created successfully.');
    }
  }
};

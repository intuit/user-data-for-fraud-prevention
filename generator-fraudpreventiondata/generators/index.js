var Generator = require('yeoman-generator');

module.exports = class extends Generator {
  async prompting() {
    this.answers = await this.prompt([
      {
        type: "input",
        name: "name",
        message: "What's your component called?"
      }
    ]);
  }

  writing() {
    this.log("component name", this.answers.name);
    this.fs.copy(
      this.templatePath('./helloworld'),
      this.destinationPath(`../src/js/${this.answers.name}`)
    );
  }
};
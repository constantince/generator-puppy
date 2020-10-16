var Generator = require("yeoman-generator");
const questions = require("./user-interacte-config");
console.log(questions);
module.exports = class extends Generator {
  greeting() {
    this.log("Now let's pay with Puppies!!");
  }

  async prompting() {
    const answers = await this.prompt(questions);
    console.log("these are your answers!!", answers);
  }

  say() {
    console.log("hello yeoman");
  }

  paths() {
    const root = this.sourceRoot();
    console.log(root);
  }

  writing() {
    this.fs.write("yeoman.py", "mm = 8");
  }

  install() {
    this.installDependencies();
  }
};

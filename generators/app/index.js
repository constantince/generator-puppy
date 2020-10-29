const { exit } = require("process");
const Generator = require("yeoman-generator");
const questions = require("./user-interacte-config");
const allConfigs = require('./packages/entre.json');
const entre = require("./packages/entre.json");
module.exports = class extends Generator {
  greeting() {
    this.log("Now let's pay with Puppies!!");
  }

  async prompting() {
    const { base, end } = questions;
    const answers = await this.prompt(base);
    const continues = await this.prompt(questions[answers.way]);
    const ends = await this.prompt(end);
    this.configName = [continues.language, continues.tools];
    // this.config.set('coffeescript', false);
    console.log(answers, continues, ends);

    // exit()
    // console.log("these are your answers!!", answers);
  }

  paths() {
    const root = this.sourceRoot();
    console.log(root);
  }

  

  writing() {
    // console.log(this.destinationPath())
    // const npm = this.templatePath('npm');
    // this.fs.copyTpl(
    //     this.templatePath('npm'),
    //     this.destinationPath(),
    //     { title: 'Templating with Yeoman' }
    //   );
    // this.copyTemplate()
    this.extendJSONFile();
  }

  //拷贝配置对应的配置文件
  copyConfigFiles() {
    this.configName.forEach(v => {
      this.fs.copyTpl(
        this.templatePath('npm'),
        this.destinationPath(),
        { title: 'Templating with Yeoman' }
      );
    });
  }

  //扩展package.json
  extendJSONFile() {
    this.configName.forEach(v => {
      console.log(v, entre[v]);
      this.fs.extendJSON(this.destinationPath('package.json'), entre[v]);
    });
    // exit();
    // const additionSettings = 
    // const pkgJson = {
    //   devDependencies: {
    //     eslint: '^3.15.0'
    //   },
    //   dependencies: {
    //     react: '^16.2.0'
    //   }
    // };

    // // Extend or create package.json file in destination path
    // this.fs.extendJSON(this.destinationPath('package.json'), pkgJson);
  }

  install() {
    // this.npmInstall();
  }
};

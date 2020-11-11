const { exit } = require("process");
const Generator = require("yeoman-generator");
const questions = require("./user-interacte-config");
const entre = require("./public/packages/entre.json");
const rules = require("./public/configs/rules.config");

module.exports = class Npm extends Generator {

  async prompting() {
    const { base, end } = questions;
    this.answers = await this.prompt(base);
    this.continues = await this.prompt(questions[this.answers.way]);
    this.ends = await this.prompt(end);
    this.configName = [this.continues.language, this.continues.tools];
    console.log(this.answers, this.continues, this.ends, this.destinationPath('dist/'));
    // exit();
  }

  paths() {
    const root = this.sourceRoot();
    console.log(root);
  }

  
  //开始写入文件
  writing() {  
    switch(this.answers.way) {
      case 'plugins':
          this.copyConfigFiles();
          this.conpyDotFiles();
          this.extendJSONFile();
        break;
      case 'npm':
          this.copyConfigFiles();
          this.conpyDotFiles();
          this.extendJSONFile();
          this.writeEntryFile();
        break;

      case 'business':

        break;

      default:
        exit();
        break;
    }
    
  }

  //拷贝配置文件.结尾
  conpyDotFiles() {
    console.log(this.answers.way);
    this.fs.copyTpl(
        this.templatePath(this.answers.way),
        this.destinationPath('dist/'),
        Object.assign(this.answers, this.continues, this.ends),
        null,
        { globOptions: { dot: true } }
    );
  }

  //写入入口文件
  writeEntryFile() {
    const isTs = this.continues.language === 'typescript';
    const suffix = isTs ? 'ts' : 'js';
    const content = isTs ? `const puppy = (word: string) => {
        console.log("hello world");
    }
    export default puppy;` : 'var puppy = "Hello Pyppy";'
    this.fs.write(this.destinationPath(`dist/src/index.${suffix}`), content);
  }

  //拷贝配置对应的配置文件
  copyConfigFiles() {
    this.configName.forEach(v => {
      this.fs.copyTpl(
        this.templatePath(`../public/configs/${v}.ejs`),
        this.destinationPath(`dist/${rules[v]}`),
        Object.assign(this.answers, this.continues, this.ends)
      );
    });
  }

  //扩展package.json
  extendJSONFile() {
    this.configName.forEach(v => {
      this.fs.extendJSON(this.destinationPath('dist/package.json'), entre[v]);
    });
    //修改包名
    this.fs.extendJSON(this.destinationPath('dist/package.json'), {
      name: this.answers.packageName
    })
  }
  //最后安装依赖
  install() {
    // this.npmInstall();
  }

  //结束

  end() {
    console.log('mission finished...')
  }
};

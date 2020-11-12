const Npm = require('./npm.index');


module.exports = class PuppyCliPlugins extends Npm {

    answers = {way: 'plugins'};

    continues = {packageName: 'unkonw', language: 'javascript', type: 'node', tools: 'rollup'};

    ends = {test: false};

    configName = [this.continues.language, this.continues.tools];

    //覆盖询问条件
    writing() {
        super.writing();
    }
}
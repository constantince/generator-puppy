var yeoman = require('yeoman-environment');
var env = yeoman.createEnv();

env.register(require.resolve('./generators/app/index.js'), 'npm:index');
env.register(require.resolve('./generators/app/plugins.index.js'), 'npm:plugins');
env.register(require.resolve('./generators/app/seed.index.js'), 'npm:seed');

module.exports = {
	//创建cli插件
	plugins: function() {
		console.log('entre...')
		env.run('npm:plugins', {'skip-install': true}, function (err) {
			console.log('done');
		});
	},
	//创建npm包
	index: function() {
		env.run('npm:index', {'skip-install': true}, function (err) {
			console.log('done');
		});
	},

	//创建seed项目
	seed: function() {
		env.run('npm:seed', {'skip-install': true}, function (err) {
			console.log('done');
		});
	}
}



// module.exports = function() {
	env.run('npm:plugins', {'skip-install': true}, function (err) {
		console.log('done');
	});
// }


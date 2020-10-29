const questions = {
	base: [
		{
			type: "list",
			choices: ["npm", "business"],
			name: "way",
			message: "你想要什么？",
			default: "npm"
		}
	
	// {
	// 	type: "list",
	// 	name: "framework",
	// 	message: "javascript framework",
	// 	choices: ["React", "Vue", "Anglar", "JQuery"]
	// },
	// {
	// 	type: "list",
	// 	name: "package",
	// 	message: "your project tool",
	// 	choices: ["webpack", "roolup"]
	// },
	// {
	// 	type: "confirm",
	// 	name: "cool",
	// 	message: "Would you like to enable the",
	// }

	],
	npm: [
		{
			type: "input",
			name: "packageName",
			message: "Please input your package name",
			default: ""
		},
		{
			type: "list",
			name: "language",
			message: "Chooise your preferred language",
			choices: ["javascript", "typescript"],
			default: "typescript"
		},
		{
			type: "list",
			name: "type",
			message: "Whitch Type Packages do your want to build",
			choices: ["web", "node"],
			default: "web"

		},
		{
			type: "list",
			name: "tools",
			message: "Select a package-tools for your project",
			choices: ["rollup", "webpack"],
			default: "rollup"
		}
	],
	end: [
		{
			type: 'confirm',
			name: "test",
			message: "Do you need unit test",
			default: false
		}
	]
};

module.exports = questions;
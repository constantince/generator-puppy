const questions = [
	{
		type: "input",
		name: "name",
		message: "your project name",
		default: this.appname
	},
	{
		type: "list",
		name: "type",
		message: "your app's type",
		choices: ["SPA", "MPA", "PWA", "SSR", "CSR", "NBA"],
		default: "SPA"
	},
	{
		type: "list",
		name: "language",
		message: "Witch language would you like to use",
		choices: ["javascript", "typescript"],
		default: "typescript"
	},
	{
		type: "list",
		name: "framework",
		message: "javascript framework",
		choices: ["React", "Vue", "Anglar", "JQuery"]
	},
	{
		type: "list",
		name: "package",
		message: "your project tool",
		choices: ["webpack", "roolup"]
	},
	{
		type: "confirm",
		name: "cool",
		message: "Would you like to enable the",
	}

];

module.exports = questions;
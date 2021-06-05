const vscode = require('vscode');
const timer = require('./lib/timer');

function activate(context) {


	vscode.commands.registerCommand('pt.startPomodoro', function () {
		timer.startPomodoro();
	});

	vscode.commands.registerCommand('pt.startRest', function () {
		timer.startRest();
	});

	vscode.commands.registerCommand('pt.pomodoroMins', function () {
		timer.pomodoroMins();
	});

	vscode.commands.registerCommand('pt.restMins', function () {
		timer.restMins();
	});

	vscode.commands.registerCommand('pt.cancelPomodoro', function () {
		timer.cancelPomodoro();
	});
	vscode.commands.registerCommand('pt.cancelRest', function () {
		timer.cancelRest();
	});
}

function deactivate() {}

module.exports = {
	activate,
	deactivate
}

const vscode = require('vscode');

var _pomodoroMins = 25; // Default values
var _restMins = 5;
var _pomodoroInterval = null;
var _restInterval = null;

function startPomodoro() {
    vscode.window.showInformationMessage("Pomodoro Started, next rest is in " + _pomodoroMins + " minutes");
    var seconds = _pomodoroMins * 60 || 0;
    _pomodoroInterval = setInterval(function() {
        seconds--;
        if(!seconds) {
            clearInterval(_pomodoroInterval);
            vscode.window.showInformationMessage("Pomodoro is finished! Time to rest!");
        }
    },1000)
}

function cancelPomodoro(){
    clearInterval(_pomodoroInterval);
    vscode.window.showInformationMessage("Pomodoro Cancelled!");
}

function startRest() {
    vscode.window.showInformationMessage("Well done! Enjoy a cup of water :)");
    var seconds = _restMins * 60 || 0;
    _restInterval = setInterval(function() {
        seconds--;
        if(!seconds) {
            clearInterval(_restInterval);
            vscode.window.showInformationMessage("Rest is done! Time to focus on the important stuff!");
        }
    },1000)
}

function cancelRest(){
    clearInterval(_restInterval);
    vscode.window.showInformationMessage("Pomodoro Cancelled!");
}

async function pomodoroMins() {
    var numPattern = /^[0-9]*$/;
    var temp = await vscode.window.showInputBox({
        prompt: "Please enter the duration of a pomodoro in minutes"
    })
    if(temp.match(numPattern)) {
        _pomodoroMins = temp;
        vscode.window.showInformationMessage("Pomodoro duration set to " + _pomodoroMins + " minutes");
    } else {
        vscode.window.showInformationMessage("Please enter a valid integer value!");
    }
}

async function restMins() {
    var numPattern = /^[0-9]*$/;
    var temp = await vscode.window.showInputBox({
        prompt: "Please enter the duration of a rest in minutes"
    })
    if(temp.match(numPattern)) {
        _restMins = temp;
        vscode.window.showInformationMessage("Rest duration set to " + _restMins + " minutes");
    } else {
        vscode.window.showInformationMessage("Please enter a valid integer value!");
    }
}

module.exports = {
    startPomodoro: startPomodoro,
    cancelPomodoro: cancelPomodoro,
    startRest: startRest,
    cancelRest: cancelRest,
    pomodoroMins: pomodoroMins,
    restMins: restMins
}
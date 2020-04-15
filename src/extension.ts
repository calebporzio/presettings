'use strict';
import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    let config = vscode.workspace.getConfiguration();

    let disposable = vscode.commands.registerCommand('presettings.choose', (settings) => {
        let presets = config.get('presettings')
        vscode.window.showQuickPick(Object.keys(presets)).then(presetKey => {
            console.log(presetKey)
            let preset = presets[presetKey]
            Object.keys(preset).forEach(settingKey => {
                config.update(settingKey, preset[settingKey])
            })
        })
        // const config = vscode.workspace.getConfiguration();

        // debugger
        // // const values = config.get('');
        // console.log(settings)
    });

    context.subscriptions.push(disposable);
}

export function deactivate() {
    //
}

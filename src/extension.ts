import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    let disposable = vscode.commands.registerCommand('extension.addFunctionComment', () => {
        const editor = vscode.window.activeTextEditor;

        if (editor) {
            const position = editor.selection.active;
            const template = `// Description: <Описание функции>\n// Params: <параметры>\n// Return: <возвращаемое значение>`;
            
            editor.edit(editBuilder => {
                editBuilder.insert(position, template);
            }).then(success => {
                if (success) {
                    vscode.window.showInformationMessage('Function comment added!');
                } else {
                    vscode.window.showErrorMessage('Failed to insert comment.');
                }
            });
        }
    });

    context.subscriptions.push(disposable);
}

export function deactivate() {}

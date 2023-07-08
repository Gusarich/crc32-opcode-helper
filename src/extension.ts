import * as vscode from 'vscode';
import * as crc32 from 'crc-32';

function calculateRequestOpcode(str: string): string {
    return (BigInt(crc32.str(str)) & BigInt(0x7fffffff)).toString(16);
}

function calculateResponseOpcode(str: string): string {
    const a = BigInt(crc32.str(str));
    const b = BigInt(0x80000000);
    return ((a | b) < 0 ? (a | b) + BigInt('4294967296') : a | b).toString(16);
}

function processScheme(
    editor: vscode.TextEditor,
    opcodeCalculator: (str: string) => string
) {
    const document = editor.document;
    const selection = editor.selection;

    const scheme = document.getText(selection);
    let constructor = scheme.substring(0, scheme.indexOf(' '));
    const rest = scheme.substring(scheme.indexOf(' '));
    if (constructor.includes('#')) {
        constructor = constructor.substring(0, constructor.indexOf('#'));
    }
    const opcode = opcodeCalculator(
        constructor +
            ' ' +
            rest
                .replace(/\(/g, '')
                .replace(/\)/g, '')
                .replace(/\s+/g, ' ')
                .replace(/;/g, '')
                .trim()
    );
    const updated = constructor + '#' + opcode + rest;
    editor.edit((editBuilder) => {
        editBuilder.replace(selection, updated);
    });
}

export function activate(context: vscode.ExtensionContext) {
    context.subscriptions.push(
        vscode.commands.registerCommand(
            'crc32-opcode-helper.generateRequestOpcode',
            () => {
                const editor = vscode.window.activeTextEditor;
                if (editor) {
                    processScheme(editor, calculateRequestOpcode);
                }
            }
        )
    );
    context.subscriptions.push(
        vscode.commands.registerCommand(
            'crc32-opcode-helper.generateResponseOpcode',
            () => {
                const editor = vscode.window.activeTextEditor;
                if (editor) {
                    processScheme(editor, calculateResponseOpcode);
                }
            }
        )
    );
}

export function deactivate() {}

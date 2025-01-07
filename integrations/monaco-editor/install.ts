import { installScript } from "common-utils/utils/dom"


const config = {
    paths: {
        vs: 'https://cdn.jsdelivr.net/npm/monaco-editor@0.46.0/min/vs',
    }
}

export async function installMonacoEditor(): Promise<any> {
    return installScript(`${config.paths.vs}/loader.js`, false, async () => {
        return new Promise((resolve, reject) => {
            const require = window.require as any
            require.config(config);
            require(
                ['vs/editor/editor.main'],
                resolve,
                reject,
            );
        })
    })
}
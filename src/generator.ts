
import * as fs from 'fs';
import * as path from 'path';
import * as rimraf from 'rimraf';

class Generator {

    rootDir: string;

    constructor() {
        this.rootDir = path.dirname(require.main.filename);
    }

    generate(dir: string): void {

        fs.readdirSync(dir).forEach(file => {

            let fullPath = path.join(dir, file);

            if (fs.lstatSync(fullPath).isDirectory()) {
                console.log(`dir : ${file}`);
                this.generate(fullPath);

            } else {

                let fileContent = fs.readFileSync(fullPath).toString();

                if (file.includes('store.ts')) {
                    /* Deal with store */
                    console.log(`store : ${file}`);

                    let regex1 = /([\s\S]*?)export/i;
                    let regex2 = /class([\s\S]*)/i;
                    let result1 = fileContent.match(regex1);
                    let result2 = fileContent.match(regex2);

                    fs.writeFileSync(
                        fullPath.replace('.ts', '.ng2.ts'),
                        `import { Injectable } from '@angular\/core';\n${result1[0].replace('export', '')}@Injectable()\nexport class ${result2[0].replace('class', '')}`
                    );

                } else if (file.includes('module.ts')) {
                    /* Deal with module */
                    console.log(`module : ${file}`);

                } else if (file.includes('component.ts')) {
                    /* Deal with component */
                    console.log(`component : ${file}`);

                } else {
                    console.log(`other : ${file}`);
                }
            }
        });
    }

}

new Generator().generate(path.join(path.dirname(require.main.filename), 'output'));

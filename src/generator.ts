/**
 * Created by Trajan on 24/04/2017.
 */

import fs = require('fs');
import path = require('path');
import rimraf = require('rimraf');

export interface Component {
    name: string;
    children?: Component[];
}

export interface GeneratedTypeInfos {
    fileLabelAdditional: string;
    name: string;
    templateFile: string;
}

export const Html: GeneratedType = 'html';
export const Sass: GeneratedType = 'sass';
export const Spec: GeneratedType = 'spec';
export const Ts: GeneratedType = 'ts';

type GeneratedType = 'html' | 'sass' | 'spec' | 'ts';

class Generator {

    componentTree: Component[] = [{
        name: 'connection-list-container',
        children: [{
            name: 'connection-list',
            children: [{
              name: 'connection-preview'
            }]
        }]
    }];

    typesMap: Map<GeneratedType, GeneratedTypeInfos> = new Map([
        [Html, {
            fileLabelAdditional: '.component.html',
            name: 'html',
            templateFile: 'html-template.html'
        }],
        [Sass, {
            fileLabelAdditional: '.component.scss',
            name: 'sass',
            templateFile: 'sass-template.scss'
        }],
        [Spec, {
            fileLabelAdditional: '.component.spec.ts',
            name: 'spec',
            templateFile: 'spec-template.spec.ts'
        }],
        [Ts, {
            fileLabelAdditional: '.component.ts',
            name: 'ts',
            templateFile: 'ts-template.ts'
        }]
    ]);

    outputDirName: string = 'output';
    outputDir: string = 'C:/Windows/Temp';
    rootDir: string = '';

    dashReplace: string = '<%dashName%>';
    camelReplace: string = '<%camelName%>';
    camelFirstUpperReplace: string = '<%camelNameFirstUpper%>';

    replacements: Map<string, string>;

    constructor() {
        this.rootDir = path.dirname(require.main.filename);
        this.outputDir = this.rootDir;
        this.replacements = new Map([
            [this.dashReplace, ''],
            [this.camelReplace, ''],
            [this.camelFirstUpperReplace, '']
        ]);
    }

    generate(): void {
        process.chdir(this.outputDir);
        if (fs.existsSync(this.outputDirName)) {
            rimraf.sync(this.outputDirName);
        }
        fs.mkdirSync(this.outputDirName);
        process.chdir(this.outputDirName);
        this.componentTree.forEach(comp => {
            this.dealWithComponent(comp);
        });
    }

    dealWithComponent(comp: Component): void {
        console.log(`Generating ${comp.name}`);
        this.replacements.set(this.dashReplace, comp.name);
        this.replacements.set(this.camelReplace, comp.name);
        this.replacements.set(this.camelFirstUpperReplace, comp.name);

        this.generateFiles(comp.name);
        if (comp.children != null) {
            comp.children.forEach(child => this.dealWithComponent(child));
        }
    }

    generateFiles(name: string): void {
        fs.mkdirSync(name);
        process.chdir(name);
        this.generateFileAndReplace(name, this.typesMap.get(Html));
        this.generateFileAndReplace(name, this.typesMap.get(Sass));
        this.generateFileAndReplace(name, this.typesMap.get(Spec));
        this.generateFileAndReplace(name, this.typesMap.get(Ts));
    }

    generateFileAndReplace(name: string, generatedType: GeneratedTypeInfos): void {

        let content = fs.readFileSync(this.rootDir + '/templates/' + generatedType.templateFile).toString();
        let replacedContent = this.replaceTemplateWithName(content, this.replacements);
        fs.writeFileSync(name + generatedType.fileLabelAdditional, replacedContent);

    }

    replaceTemplateWithName(template: string, replacements: Map<string, string>): string {

        let initTemplate = template;

        replacements.forEach((value: string, key: string) => {
            initTemplate = initTemplate.replace(key, value);
        });

        return initTemplate;
    }

}

new Generator().generate();